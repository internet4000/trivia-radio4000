import DS from 'ember-data'
import {computed} from '@ember/object'
const {hasMany} = DS

export default DS.Model.extend({
  channel: DS.attr(),

  init() {
    this._super(...arguments)
    this.players = []
  },

  usedTracks: hasMany('tracks'),
  minimumQuestions: '1',
  maximumQuestions: computed('channel.tracks.length', {
    get(key, value) {
      let max = this.channel.get('tracks.length');
      if(!max) {
        return 0
      }
      return max
    }
  }),
  totalQuestions: computed('channel.tracks.length', {
    get(key, value) {
      let max = this.maximumQuestions
      if(!value || typeof value != 'number') {
        if(max) {
          return max
        }
        return this.minimumQuestions
      }

      if(value <= 0 || value > max || value < this.minimumQuestions) {
        return max
      }
      return value
    },
    set(key, value) {
      let max = this.maximumQuestions

      if(!max) {
        return this.minimumQuestions;
      }

      if(value >= max) {
        return max
      }

      return value
    }
  })
});
