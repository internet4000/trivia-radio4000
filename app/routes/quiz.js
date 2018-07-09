import Route from '@ember/routing/route'

export default Route.extend({
  async model({id}) {
    if (!id) this.transitionTo('new-game')

    let quiz = this.store.peekRecord('quiz', id)

    if (!quiz) {
      quiz = this.store.createRecord('quiz', {id})
    }

    // hardcoded channel to speed up development
    // let channel = await this.store.findRecord('channel', '-J_Mp1OhyLuo4tJozPAV')
    // quiz.set('channel', channel)

    return quiz
  }
})
