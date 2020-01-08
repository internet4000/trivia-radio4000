import Component from '@ember/component'
import {action, computed} from '@ember/object'

export default class AddPlayerComponent extends Component {
  placeholder = computed('numberOfPlayers', function () {
    return `Player ${this.numberOfPlayers + 1}`
  })

  @action
  add(event) {
    event.preventDefault()
    let name = this.get('name') || this.get('placeholder')
    this.get('onSubmit')(name)
    this.set('name', '')
  }
}
