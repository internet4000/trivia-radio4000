import Component from '@ember/component';

export default Component.extend({
  actions: {
    add() {
      this.get('add')(this.get('name'))
    }
  }
});
