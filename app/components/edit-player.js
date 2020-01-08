import Component from '@ember/component';
import {action} from '@ember/object'

export default class EditPlayerComponent extends Component {
  // player = undefined
  // removePlayer = undefined

  @action
  removePlayer() {
    this.get('removePlayer')(this.get('player'))
  }
}
