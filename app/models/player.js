import DS from 'ember-data'

const {belongsTo, attr} = DS

export default DS.Model.extend({
  name: attr('string'),
  quizzes: belongsTo('quiz')
})
