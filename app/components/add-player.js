import Component from '@ember/component'

export default Component.extend({
  actions: {
    add(event) {
      event.preventDefault()
      this.get('onSubmit')(this.get('name'))
      this.set('name', '')
    }
  }
})
