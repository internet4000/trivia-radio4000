import Component from '@ember/component'

export default Component.extend({
  actions: {
    select(channel) {
      this.onSelect(channel)
    }
  }
})
