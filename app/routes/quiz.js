import Route from '@ember/routing/route'

export default Route.extend({
  async model({id}) {
    if (!id) {
      this.transitionTo('new-game')
    }
    const quiz = this.store.peekRecord('quiz', id)
    if (!quiz || !quiz.get('channel.id')) {
      this.transitionTo('new-game')
    }
    return quiz
  },
  afterModel(quiz) {
    let players = quiz.get('players')
    if (!players.length) {
      console.log('adding one player')
      let player = this.store.createRecord('player', {
        name: 'Player 1'
      })
      players.pushObject(player)
    }
  },
  actions: {
    startQuiz() {
      this.transitionTo('quiz.questions.question', 1)
    }
  }
})
