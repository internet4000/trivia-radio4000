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

      // create player
      let player = this.store.createRecord('player', {
        name,
        quiz
      })

      // assign player to quiz
      return quiz.get('players')
        .then(players => players.addObject(player))
    }
  }
})
