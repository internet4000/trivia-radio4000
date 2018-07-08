import Ember from 'ember';
import DS from 'ember-data';
import firebase from 'firebase';
import format from 'npm:date-fns/format';

const {Model, attr, belongsTo} = DS;
const {get, computed} = Ember;

export default Model.extend({
	created: attr('number'),
	url: attr('string'),
	title: attr('string'),
	body: attr('string'),
	ytid: attr('string'),

	// relationships
	channel: belongsTo('channel', {
		async: true,
		inverse: 'tracks'
	}),

	// Own properties
	// property for local use only, not planned to save them
	liveInCurrentPlayer: false,
	playedInCurrentPlayer: false,
	finishedInCurrentPlayer: false,

	createdMonth: computed('created', function () {
		let created = get(this, 'created');

		// Avoid temporary Firebase timestamps.
		// if (!(created instanceof Date) || isNaN(created)) {
		if (created['.sv'] === 'timestamp') {
			Ember.debug('using temporary date')
			created = new Date();
		}

		return format(created, 'MMMM YYYY');
	}),

	searchableData: computed('title', 'body', function() {
		return [
			get(this, 'title'),
			get(this, 'body')
		].join(' ');
	})
});
