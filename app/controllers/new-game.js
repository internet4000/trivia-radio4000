import Controller from '@ember/controller'
import {action, set} from '@ember/object'

export default class NewGameController extends Controller {
  queryParams = ['slug', 'questions']
  slug = ''
  questions = 10

  @action
  async setQuizChannel(channel) {
    // Make sure we have a count of tracks.
    const tracks = await channel.get('tracks')
    channel.set('tracksCount', tracks.length)

    // And store the channel on the quiz model.
    set(this, 'model.quiz.channel', channel)

    this.transitionToRoute('new-game', {
      queryParams: {slug: channel.slug}
    })
  }

  @action
  changeRadio() {
    set(this, 'model.quiz.channel', null)
    set(this, 'slug', null)
  }
}
