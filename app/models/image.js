import DS from 'ember-data';
import firebase from 'firebase';

const {Model, attr, belongsTo} = DS;

export default Model.extend({
	created: attr('number'),
	src: attr('string'),
	channel: belongsTo('channel')
});
