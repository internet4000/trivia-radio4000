import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectChannel(channel) {
      this.get('model.quiz').set('channel', channel)
    }
  }
});
