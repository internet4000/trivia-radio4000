import Controller from '@ember/controller'
import {conditional, gt, raw} from 'ember-awesome-macros'

export default Controller.extend({
   isMultiplayer: gt('model.players.length', 1),
   playerLabel: conditional('isMultiplayer', raw('players'), raw('player'))
})
