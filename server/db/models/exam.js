const Sequelize = require('sequelize')
const db = require('../db')

const Exam = db.define('exam', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Exam
