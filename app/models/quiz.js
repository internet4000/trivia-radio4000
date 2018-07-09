import DS from 'ember-data';

const {belongsTo, hasMany} = DS;

export default DS.Model.extend({
  channel: belongsTo('channel'),
  players: hasMany('player')
});
