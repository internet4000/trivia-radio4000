import Component from '@ember/component'
import {filterBy} from '@ember/object/computed'

export default Component.extend({
  channelsWithTracks: filterBy('channels', 'totalTracks'),
  actions: {
    select(channel) {
      this.onSelect(channel)
    }
  }
})
