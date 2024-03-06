import { module, test } from 'qunit';

import { setupTest } from 'my-download-table/tests/helpers';

module('Unit | Model | data row', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('data-row', {});
    assert.ok(model);
  });
});
