import {computed} from '@ember/object'
import DS from 'ember-data'
import {and, hash} from 'ember-awesome-macros'
const {Model, attr, hasMany} = DS

/*
	Channel model
  It is a simplified version of the actual radio4000 channel model
	*/

export default Model.extend({
  created: attr('number'),
  updated: attr('number'),

  title: attr('string'),
  slug: attr('string'),
  body: attr('string'),
  link: attr('string'),
  isFeatured: attr('boolean'),
  isPremium: attr('boolean'),

  coordinatesLatitude: attr('number'),
  coordinatesLongitude: attr('number'),
  hasCoordinates: and('coordinatesLatitude', 'coordinatesLongitude'),
  coordinates: hash({
    lng: 'coordinatesLongitude',
    lat: 'coordinatesLatitude'
  }),

  // Set the latest image as the cover image.
  coverImage: computed('images.[]', function() {
    return this.get('images.lastObject')
  }),

  // Relationships.
  images: hasMany('image', {async: true}),
  tracks: hasMany('track', {async: true}),
  tracksCount: attr('number', {default: 0})
})
