import Route from '@ember/routing/route'
import {hash} from 'rsvp'

function randomText(length = 4) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return new Array(length)
    .join()
    .split(',')
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('')
}

export default Route.extend({
  async model({slug, questions}) {
    const id = randomText()
    const quiz = this.store.createRecord('quiz', {id})
    const channels = this.store.findAll('channel')

    if (slug) {
      const query = await this.store.query('channel', { orderBy: 'slug', equalTo: slug })
      const channel = query.get('firstObject')
      const tracks = await channel.get('tracks')
      channel.set('tracksCount', tracks.length)
      quiz.set('channel', channel)
    }

    if (slug && questions) {
      quiz.set('totalQuestions', questions)
    }

    return hash({quiz, channels})
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('slug', null)
    }
  }
})
