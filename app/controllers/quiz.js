import Controller from '@ember/controller'
import {conditional, gt, raw} from 'ember-awesome-macros'

export default class QuizController extends Controller {
   isMultiplayer = gt('model.players.length', 1)
   playerLabel = conditional('isMultiplayer', raw('players'), raw('player'))
}
