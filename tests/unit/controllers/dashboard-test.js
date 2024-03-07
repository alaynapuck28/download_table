import { module, test } from 'qunit';
import { setupTest } from 'my-download-table/tests/helpers';
import { set } from '@ember/object';
import { run } from '@ember/runloop';

module('Unit | Controller | dashboard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:dashboard');
    assert.ok(controller);
  });
  test('show modal should be true after clicking download', async function (assert) {
    let controller = this.owner.lookup('controller:dashboard');
    controller.showModal = false;
    const selectedRows = [];

    controller.set('model', selectedRows);

    await controller.downloadSelectedRows();

    assert.true(controller.showModal, true);
  });
  test('it sets modal message correctly when no selected rows are available', function (assert) {
    // Arrange
    const controller = this.owner.lookup('controller:dashboard');
    const selectedRows = [];

    run(() => {
      set(controller, 'model', selectedRows);
    });

    controller.downloadSelectedRows();

    assert.deepEqual(
      controller.modalMessage,
      'Please select files to download',
      'Modal message is set correctly',
    );
  });
  test('it sets modal message correctly', function (assert) {
    let controller = this.owner.lookup('controller:dashboard');
    controller.modalMessage = '';
    const selectedRows = [
      {
        name: 'uxtheme.dll',
        device: 'test device',
        path: 'test path',
        status: 'available',
        isChecked: true,
      },
    ];

    run(() => {
      set(controller, 'model', selectedRows);
    });

    controller.downloadSelectedRows();

    assert.deepEqual(
      controller.modalMessage,
      'test path - test device',
      'Modal message set correctly',
    );
  });
  test('it selects all available rows when selectAll action is triggered', function (assert) {
    const controller = this.owner.lookup('controller:dashboard');
    const row1 = {
      name: 'Row 1',
      status: 'available',
      isChecked: false,
    };
    const row2 = {
      name: 'Row 2',
      status: 'available',
      isChecked: false,
    };
    const row3 = {
      name: 'Row 3',
      status: 'unavailable', // This row should not be affected
      isChecked: false,
    };
    const rows = [row1, row2, row3];

    controller.set('model', rows);

    controller.selectAll({ target: { checked: true } });

    assert.ok(row1.isChecked, 'Row 1 is checked');
    assert.ok(row2.isChecked, 'Row 2 is checked');
    assert.notOk(row3.isChecked, 'Row 3 is not checked');
  });
});
