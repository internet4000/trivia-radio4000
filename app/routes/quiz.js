import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {
    let store = this.get('store')
    let model = store.peekRecord('quiz', id)

    if (!model) {
      return store.createRecord('quiz', { id })
    }

    return model
  }
});
