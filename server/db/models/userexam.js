const Sequelize = require('sequelize')
const db = require('../db')

const UserExam = db.define('userexam', {
  examId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sectionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = UserExam
