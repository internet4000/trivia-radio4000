import {computed, get} from '@ember/object'
import DS from 'ember-data'

const {Model, attr, belongsTo} = DS

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

  searchableData: computed('title', 'body', function() {
    return [get(this, 'title'), get(this, 'body')].join(' ')
  })
})
