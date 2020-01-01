import Controller from '@ember/controller'
import {set} from '@ember/object'

export default Controller.extend({
  queryParams: ['slug', 'questions'],
  slug: '',
  questions: 10,

  actions: {
    async setQuizChannel(channel) {
      // Make sure we have a count of tracks.
      const tracks = await channel.get('tracks')
      channel.set('tracksCount', tracks.length)

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
