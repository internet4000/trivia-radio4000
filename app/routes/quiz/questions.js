import Route from '@ember/routing/route'
import {hash} from 'rsvp'
import {pickRandom} from 'trivia-radio4000/utils/random-helpers'

const AMOUNT_QUESTIONS = 5

export default Route.extend({
  async model() {
    let quiz = this.modelFor('quiz')
    let tracks = await quiz.get('channel.tracks')
    let questions = pickRandom(tracks, 10)
    return questions
  }
})
