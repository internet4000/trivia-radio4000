import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {
    let store = this.get('store')
    let quiz = store.peekRecord('quiz', id)

    if (!quiz) {
      quiz = store.createRecord('quiz', { id })
    }

    return quiz
  }
});
