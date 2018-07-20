import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | questions-number-chooser', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`{{questions-number-chooser}}`)
    assert.ok(true)
    // assert.equal(this.element.textContent.trim(), '')
  })
})
