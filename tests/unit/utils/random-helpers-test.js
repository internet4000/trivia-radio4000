import {pickRandom} from 'trivia-radio4000/utils/random-helpers';
import { module, test } from 'qunit';

module('Unit | Utility | random-helpers', function() {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = pickRandom([1,2,3], 2);
    assert.ok(typeof pickRandom, 'function')
    assert.ok(result)
  });
});
