import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | start/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:start/index');
    assert.ok(route);
  });
});
