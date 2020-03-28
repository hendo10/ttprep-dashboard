const Sequelize = require('sequelize')
const db = require('../db')

const Section = db.define('section', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Section
