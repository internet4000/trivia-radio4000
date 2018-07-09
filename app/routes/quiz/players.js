import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    return this.modelFor('quiz')
  },
  afterModel(model) {
    if (!model.get('channel.id')) this.transitionTo('quiz.index')
  },
  actions: {
    // create player model, with a player name
    addPlayer(name) {
      let quiz = this.modelFor('quiz')
      let player = this.store.createRecord('player', {name, quiz})
      quiz.get('players').pushObject(player)
    },
    removePlayer(player) {
      let quiz = this.modelFor('quiz')
      quiz.get('players').removeObject(player)
    },
    continue() {
      this.transitionTo('quiz.questions.question', 1)
    }
  }
})
