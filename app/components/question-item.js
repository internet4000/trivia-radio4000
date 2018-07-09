import Component from '@ember/component'

export default Component.extend({
  actions: {
    selectAnswer(answer) {
      this.onAnswer(answer)
    }
  }
})
