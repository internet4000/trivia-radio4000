import Route from '@ember/routing/route';
import {hash} from 'rsvp'
import {getRandomIndex, shuffleArray} from 'trivia-radio4000/utils/random-helpers'

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
    let question = quiz.get('questions')[index]
    let tracks = await quiz.get('channel.tracks')

    index = index - 1
    this.questionIndex = index

    let answers = shuffleArray([
      getRandomAnswer(tracks, question.id).title,
      getRandomAnswer(tracks, question.id).title,
      question.title
    ])

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
