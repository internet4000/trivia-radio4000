import Route from '@ember/routing/route'

export default Route.extend({
  async model({id}) {
    if (!id) this.transitionTo('new-game')

    let store = this.store
    let quiz = store.peekRecord('quiz', id)

    if (!quiz) {
      quiz = store.createRecord('quiz', {id})
    }

    let players = quiz.get('players')

    if (!players.length) {
      let player = store.createRecord('player', {
        name: 'Player 1'
      })
      players.pushObject(player)
    }

    // hardcoded channel to speed up development
    // let channel = await this.store.findRecord('channel', '-J_Mp1OhyLuo4tJozPAV')
    // quiz.set('channel', channel)

    return quiz
  },
  actions: {
    startQuiz() {
      return this.currentModel.get('channel')
        .then(channel => {
          if(channel) {
            return this.transitionTo('quiz.questions.question', 1)
          }
          return this.transitionTo('quiz.channels')
        })
    }
  }
})
