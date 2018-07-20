import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | channel-chooser', function(hooks) {
  setupRenderingTest(hooks)

  const channels = [{title: 'a'}, {title: 'b', totalTracks: true}, {title: 'c'}]

  test('it renders', async function(assert) {
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('channels', channels)
    await render(hbs`{{channel-chooser channels=channels}}`)
    assert.equal(this.element.textContent.trim(), 'b')
    assert.equal(this.element.querySelectorAll('button').length, 1)
  })
})
