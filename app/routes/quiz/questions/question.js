import Route from '@ember/routing/route';
import {hash} from 'rsvp'
import {getRandomIndex} from 'trivia-radio4000/utils/random-helpers'

// Returns a random track that is not the question.
function getRandomAnswer(tracks, excludeId) {
  let track = tracks.objectAt(getRandomIndex(tracks))
  if (track.id === excludeId) {
    return getRandomAnswer(...arguments)
  }
  return track
}

export default Route.extend({
  async model({index}) {
    let quiz = this.modelFor('quiz')
    let questions = this.modelFor('quiz.questions')
    this.questionIndex = index - 1
    let question = questions[this.questionIndex]

    let tracks = await this.modelFor('quiz').get('channel.tracks')

    let answers = [
      getRandomAnswer(tracks, question.id).title,
      getRandomAnswer(tracks, question.id).title,
      question.title
    ]

    return hash({
      question,
      answers
    })
  },
  actions: {
    checkAnswer(answer) {
      let question = this.currentModel.question
      let isCorrect = answer === question.title
      if (isCorrect) {
        alert('YAY')
        this.transitionTo('quiz.questions.question', this.questionIndex + 2)
      } else {
        alert('NAY…')
      }
    }
  }
});
