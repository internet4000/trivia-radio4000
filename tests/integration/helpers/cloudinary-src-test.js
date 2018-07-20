import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | cloudinary-src', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    const imageId = '1234'
    this.set('inputValue', imageId)

    await render(hbs`{{cloudinary-src inputValue}}`);

    const result = this.element.textContent.trim()

    assert.ok(result.includes('https://res.cloudinary.com'))
    assert.ok(result.includes(imageId))
  });
});
