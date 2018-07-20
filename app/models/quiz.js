import DS from 'ember-data'
import {computed} from '@ember/object'
import {alias} from '@ember/object/computed'
import {conditional} from 'ember-awesome-macros'

const {attr, hasMany} = DS

export default DS.Model.extend({
  channel: attr(),

  init() {
    this._super(...arguments)
    this.players = []
  },

  usedTracks: hasMany('tracks'),

  minimumQuestions: '1',
  maximumQuestions: conditional('channel.totalTracks', 'channel.totalTracks', 0),
  totalQuestions: computed('channel.totalTracks', {
    get(key, value) {
      let max = this.maximumQuestions
      if (!value || typeof value != 'number') {
        if(max) {
          return max
        }
        return this.minimumQuestions
      }

      if (value <= 0 || value > max || value < this.minimumQuestions) {
        return max
      }
      return value
    },
    set(key, value) {
      let max = this.maximumQuestions

      if (!max) {
        return this.minimumQuestions;
      }

      if (value >= max) {
        return max
      }

      return value
    }
  })
});
