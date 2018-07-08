import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    startQuiz(channel) {
      console.log(channel.title)
    }
  }
});
