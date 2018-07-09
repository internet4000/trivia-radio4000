import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('quiz.id')
  },
  actions: {
    // create player model, with a player name
    addPlayer (name) {
      let quiz = this.modelFor('quiz.id')
      // create player
      let player = this.get('store').createRecord('player', {
        name,
        quiz
      });

      // assign player to quiz
      return quiz.get('players')
        .then(players => players.addObject(player))
    }
  }
});
