import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | events/view/edit/sponsors', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:events/view/edit/sponsors');
    assert.ok(route);
  });
});
