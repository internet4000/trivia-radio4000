import DS from 'ember-data';

const {belongsTo, attr} = DS

export default DS.Model.extend({
  quizzes: belongsTo('quiz'),
  name: attr('string')
});
