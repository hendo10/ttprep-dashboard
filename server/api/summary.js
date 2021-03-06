const router = require('express').Router()
const pg = require('pg')
const config =
  process.env.DATABASE_URL ||
  'postgres://yourname:yourpassword@localhost:5432/nestegg'
const client = new pg.Client(config)
client.connect()

module.exports = router

//REVENUE PER DAY FOR CALENDAR
router.get('/revenueByDay', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `SELECT
      SUM(orders.revenue )
      FROM orders
      WHERE orders."timeOfPurchase" ::date = $1
      AND orders."restaurantId" = $2;`
      const date = req.query.date
      const values = [date, req.user.restaurantId]
      const revenueByDay = await client.query(text, values)
      res.json(revenueByDay.rows[0].sum) //RETURNS JUST THE #
    }
  } catch (error) {
    next(error)
  }
})
//--list of waiters on specific day:
router.get('/waitersOnADay', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT
      DISTINCT waiters."name"
      FROM waiters
      JOIN orders on orders."waiterId" = waiters.id
      WHERE orders."timeOfPurchase" ::date = $1
      AND orders."restaurantId" = $2;`
      const date = req.query.date
      const values = [date, req.user.restaurantId]
      const waitersOnADay = await client.query(text, values)
      res.json(waitersOnADay.rows) //RETURNS AN ARRAY OF OBJS WITH NAMES
    }
  } catch (error) {
    next(error)
  }
})
//--most popular dish on a specific day: **still need by the date...
router.get('/mostPopularDishOnADay', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT "menuItems"."menuItemName" as name,
      SUM("menuItemOrders".quantity) as total
      FROM "menuItemOrders"
      JOIN "menuItems" on "menuItems".id = "menuItemOrders"."menuItemId"
      JOIN orders on orders.id = "menuItemOrders"."orderId"
      WHERE orders."timeOfPurchase" ::date = $1
      AND "menuItems"."beverageType" isnull
      AND orders."restaurantId" = $2
      GROUP BY name
      ORDER BY total desc
      limit 1;
      `
      const date = req.query.date
      const values = [date, req.user.restaurantId]
      const mostPopularDishOnADay = await client.query(text, values)
      res.json(mostPopularDishOnADay.rows[0].name)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/restaurantInfo', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT "restaurantName", "location"
      FROM restaurants
      WHERE restaurants.id = $1;`
      const restaurantId = req.user.restaurantId
      const values = [restaurantId]
      const restaurantInfo = await client.query(text, values)
      res.json(restaurantInfo.rows)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/numberOfWaiters', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT
      COUNT(*)
      FROM waiters
      WHERE waiters."restaurantId" = $1;`
      const values = [req.user.restaurantId]
      const waiterCount = await client.query(text, values)
      const numOfWaiters = Number(waiterCount.rows[0].count)
      res.json(numOfWaiters)
    }
  } catch (error) {
    next(error)
  }
})
router.get('/numberOfGuestsVsHour', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT
    EXTRACT(hour from orders."timeOfPurchase") AS hours,
    SUM(orders."numberOfGuests"),
    ROUND( 100.0 * (
      SUM(orders."numberOfGuests")::DECIMAL / (
        SELECT SUM(orders."numberOfGuests")
        FROM orders
        WHERE orders."timeOfPurchase" >= NOW() - $1::interval
        AND orders."restaurantId" = $2
      )), 1) AS percentage
  FROM ORDERS
  WHERE orders."timeOfPurchase" >= NOW() - $1::interval
  AND orders."restaurantId" = $2
  GROUP BY hours
  ORDER BY hours;`
      const interval = 1 + ' ' + req.query.interval
      const values = [interval, req.user.restaurantId]
      const numberOfGuestsVsHour = await client.query(text, values)
      const percentageArr = numberOfGuestsVsHour.rows.map(el =>
        Number(el.percentage)
      )
      res.json(percentageArr)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/revenueVsTime', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `
      SELECT to_char("timeOfPurchase",'Mon') AS mon,
      DATE_TRUNC('month', orders."timeOfPurchase" ) as m,
      EXTRACT(YEAR FROM "timeOfPurchase") AS yyyy,
      EXTRACT(DAY FROM NOW()) AS daynow,
      SUM("revenue") AS "monthlyRevenue"
      FROM orders
      WHERE orders."timeOfPurchase" >= NOW() - $1::interval
      AND orders."timeOfPurchase" <= NOW()
      AND orders."restaurantId" = $2
      GROUP BY mon, m, yyyy
      ORDER BY m;
      `
      // didn't find a way to add todays date to interval in the same query so used JS
      const year = req.query.year
      // const interval = year + ' year'
      // const interval = `${year} year + ${new Date().getDate()} days`
      const interval = `${year} year + ${new Date().getDate() - 1} days`

      const values = [interval, req.user.restaurantId]
      const revenueVsTime = await client.query(text, values)
      const allDateRevenue = {month: [], revenue: []}
      revenueVsTime.rows.forEach(row => {
        allDateRevenue.month.push(`${row.mon} ${String(row.yyyy)}`)
        allDateRevenue.revenue.push(Number(row.monthlyRevenue))
      })
      res.json(allDateRevenue)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/DOWAnalysisTable', async (req, res, next) => {
  try {
    if (req.user.id) {
      const text = `SELECT EXTRACT(DOW FROM orders."timeOfPurchase") AS "dayOfWeek",
      SUM(orders."numberOfGuests") AS "numberOfGuests",
      ROUND((SUM(orders.revenue)::numeric)/1000,2) AS "dayRevenue",
      SUM("summedMenuItemOrder"."summedQuantity")
            FROM orders
            JOIN (SELECT SUM("menuItemOrders".quantity) AS "summedQuantity", "menuItemOrders"."orderId"
            FROM "menuItemOrders"
            GROUP BY "menuItemOrders"."orderId") AS "summedMenuItemOrder"
            ON orders.id = "summedMenuItemOrder"."orderId"
            WHERE orders."timeOfPurchase" >= NOW() - interval '1 year'
            AND orders."restaurantId" = $1
            GROUP BY "dayOfWeek"
            ORDER by "dayOfWeek" ASC;
        `
      const values = [req.user.restaurantId]
      const DOWAnalysisTable = await client.query(text, values)
      res.json(tableFormatting(DOWAnalysisTable.rows))
    }
  } catch (error) {
    next(error)
  }
})

function tableFormatting(array) {
  let DOWconversion = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  array.forEach(element => {
    element.dayOfWeek = DOWconversion[element.dayOfWeek]
  })
  return array
}
