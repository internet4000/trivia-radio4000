import Component from '@ember/component'
import {computed} from '@ember/object'

export default Component.extend({
  quiz: undefined,
  channel: computed.reads('quiz.channel')
});
