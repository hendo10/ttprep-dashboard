const Sequelize = require('sequelize')
const db = require('../db')

const ExamScore = db.define('examscore', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
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
  },
  correct: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  incorrect: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY
  }
})

module.exports = ExamScore
