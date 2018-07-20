import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | edit-player', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`{{edit-player}}`);
    assert.ok(true)
    // assert.equal(this.element.textContent.trim(), '');
  })
})
