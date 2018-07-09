import Component from '@ember/component';

export default Component.extend({
  // props
  player: undefined,
  removePlayer: undefined,

  actions: {
    removePlayer() {
      this.get('removePlayer')(this.get('player'))
    }
  }
});
