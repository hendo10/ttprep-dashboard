const User = require('./user')
const Category = require('./category')
const Exam = require('./exam')
const ExamScore = require('./examscore')
const Section = require('./section')
const UserExam = require('./userexam')
const ScoreByExam = require('./scoreByExam')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(ExamScore)
ExamScore.belongsTo(User)

User.belongsToMany(Exam, {through: UserExam})
ExamScore.belongsToMany(User, {through: UserExam})

UserExam.belongsTo(ExamScore)
User.hasMany(UserExam)
Exam.hasMany(UserExam, {as: 'exam'})
Category.hasMany(UserExam, {as: 'category'})
Section.hasMany(UserExam, {as: 'section'})

// User.belongsToMany(Exam, {through: UserExam})
// ExamScore.belongsToMany(User, {through: UserExam})

// Category.hasMany(ExamScore, {as: 'category'})
ExamScore.belongsTo(Category)
// Section.hasMany(ExamScore, {as: 'section'})
ExamScore.belongsTo(Section)
// Exam.hasMany(ExamScore, {as: 'exam'})
ExamScore.belongsTo(Exam)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Category,
  Section,
  Exam,
  ExamScore,
  UserExam,
  ScoreByExam
}
