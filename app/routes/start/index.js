import Route from '@ember/routing/route';

function randomText(length = 4) {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return new Array(length).join().split(',').map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

export default Route.extend({
  afterModel() {

    this.replaceWith('quiz.id', randomText())
  }
});
