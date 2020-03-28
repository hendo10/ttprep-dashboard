'use strict'

const db = require('../server/db')
const {
  User,
  Category,
  Exam,
  Section,
  ExamScore,
  UserExam,
  ScoreByExam
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main Street',
      city: 'Westchester',
      state: 'NY',
      zip: 10707,
      phone: '(xxx) xxx-xxxx',
      school: 'Xavier, `21',
      email: 'john@gmail.com',
      password: '123'
    }),
    User.create({
      firstName: 'Alan',
      lastName: 'Reed',
      address: '123 Main Avenue',
      city: 'New York',
      state: 'NY',
      zip: 10707,
      phone: '(xxx) xxx-xxxx',
      school: 'Xavier, `21',
      email: 'alan@gmail.com',
      password: '123'
    })
  ])

  await Promise.all([
    Category.create({
      id: 1,
      categoryName: 'Standard'
    }),
    Category.create({
      id: 2,
      categoryName: 'Cmd-of-Evid'
    }),
    Category.create({
      id: 3,
      categoryName: 'Voc-in-Cont'
    }),
    Category.create({
      id: 4,
      categoryName: 'Graphics'
    }),
    Category.create({
      id: 5,
      categoryName: 'Grammar'
    }),
    Category.create({
      id: 6,
      categoryName: 'Exp. of Ideas'
    }),
    Category.create({
      id: 7,
      categoryName: 'Algebra I'
    }),
    Category.create({
      id: 8,
      categoryName: 'Algebra II'
    }),
    Category.create({
      id: 9,
      categoryName: 'Data Analysis'
    }),
    Category.create({
      id: 10,
      categoryName: 'Add`l Topics'
    })
  ])

  await Promise.all([
    Section.create({
      id: 1,
      name: 'Reading'
    }),
    Section.create({
      id: 2,
      name: 'Writing'
    }),
    Section.create({
      id: 3,
      name: 'Math'
    })
  ])

  await Promise.all([
    Exam.create({
      id: 1,
      name: 'Diag 1'
    }),
    Exam.create({
      id: 2,
      name: 'Diag 2'
    }),
    Exam.create({
      id: 3,
      name: 'Diag 3'
    }),
    Exam.create({
      id: 4,
      name: 'Diag 4'
    })
  ])

  await Promise.all([
    ExamScore.create({
      id: 1,
      userId: 1,
      examId: 1,
      sectionId: 1,
      categoryId: 1,
      correct: 15,
      incorrect: 4,
      score: 79
    }),
    ExamScore.create({
      id: 2,
      userId: 1,
      examId: 1,
      sectionId: 1,
      categoryId: 2,
      correct: 12,
      incorrect: 7,
      score: 64
    }),
    ExamScore.create({
      id: 3,
      userId: 1,
      examId: 1,
      sectionId: 1,
      categoryId: 3,
      correct: 3,
      incorrect: 5,
      score: 38
    }),
    ExamScore.create({
      id: 4,
      userId: 1,
      examId: 1,
      sectionId: 1,
      categoryId: 4,
      correct: 4,
      incorrect: 2,
      score: 67
    }),
    ExamScore.create({
      id: 5,
      userId: 1,
      examId: 1,
      sectionId: 2,
      categoryId: 5,
      correct: 16,
      incorrect: 4,
      score: 80
    }),
    ExamScore.create({
      id: 6,
      userId: 1,
      examId: 1,
      sectionId: 2,
      categoryId: 6,
      correct: 15,
      incorrect: 9,
      score: 63
    }),
    ExamScore.create({
      id: 7,
      userId: 1,
      examId: 1,
      sectionId: 3,
      categoryId: 7,
      correct: 11,
      incorrect: 7,
      score: 61
    }),
    ExamScore.create({
      id: 8,
      userId: 1,
      examId: 1,
      sectionId: 3,
      categoryId: 8,
      correct: 12,
      incorrect: 5,
      score: 71
    }),
    ExamScore.create({
      id: 9,
      userId: 1,
      examId: 1,
      sectionId: 3,
      categoryId: 9,
      correct: 9,
      incorrect: 8,
      score: 53
    }),
    ExamScore.create({
      id: 10,
      userId: 1,
      examId: 1,
      sectionId: 3,
      categoryId: 10,
      correct: 0,
      incorrect: 6,
      score: 0
    })
  ])

  await Promise.all([
    UserExam.create({
      userId: 1,
      examscoreId: 1,
      examId: 1,
      sectionId: 1,
      categoryId: 1
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 2,
      examId: 1,
      sectionId: 1,
      categoryId: 2
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 3,
      examId: 1,
      sectionId: 1,
      categoryId: 3
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 4,
      examId: 1,
      sectionId: 1,
      categoryId: 4
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 5,
      examId: 1,
      sectionId: 2,
      categoryId: 5
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 6,
      examId: 1,
      sectionId: 2,
      categoryId: 6
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 7,
      examId: 1,
      sectionId: 3,
      categoryId: 7
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 8,
      examId: 1,
      sectionId: 3,
      categoryId: 8
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 9,
      examId: 1,
      sectionId: 3,
      categoryId: 9
    }),
    UserExam.create({
      userId: 1,
      examscoreId: 10,
      examId: 1,
      sectionId: 3,
      categoryId: 10
    })
  ])

  await Promise.all([
    ScoreByExam.create({
      userId: 1,
      examId: 1,
      date: '2020-01-07',
      readingwriting: 500,
      math: 500,
      total: 1000
    }),
    ScoreByExam.create({
      userId: 1,
      examId: 2,
      date: '2020-02-02',
      readingwriting: 570,
      math: 550,
      total: 1120
    }),
    ScoreByExam.create({
      userId: 1,
      examId: 3,
      date: '2020-02-22',
      readingwriting: 590,
      math: 590,
      total: 1180
    }),
    ScoreByExam.create({
      userId: 1,
      examId: 4,
      date: '2020-02-29',
      readingwriting: 590,
      math: 600,
      total: 1190
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
