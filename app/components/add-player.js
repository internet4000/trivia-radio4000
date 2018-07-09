import Component from '@ember/component'
import {computed} from '@ember/object'

export default Component.extend({
  placeholder: computed('numberOfPlayers', function () {
    return `Player ${this.numberOfPlayers + 1}`
  }),
  actions: {
    add(event) {
      event.preventDefault()
      let name = this.get('name') || this.get('placeholder')
      this.get('onSubmit')(name)
      this.set('name', '')
    }
  }
})
