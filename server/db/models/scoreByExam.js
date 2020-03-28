const Sequelize = require('sequelize')
const db = require('../db')

const ScoreByExam = db.define('scorebyexam', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  examId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY
  },
  readingwriting: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  math: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = ScoreByExam
