import Controller from '@ember/controller'
import {set} from '@ember/object'
import {alias} from '@ember/object/computed'

export default Controller.extend({
  queryParams: ['slug', 'questions'],
  slug: '',
  questions: 10,

  channel: alias('model.quiz.channel'),

  actions: {
    startQuiz() {
      const quiz = this.model.quiz
      this.transitionToRoute('quiz', quiz.id)
    },
    setChannel(channel) {
      set(this, 'model.quiz.channel', channel)
      this.transitionToRoute('new-game', {
        queryParams: {slug: channel.slug}
      })
    },

    changeRadio() {
      set(this, 'model.quiz.channel', null)
      set(this, 'slug', null)
    }
  }
})
