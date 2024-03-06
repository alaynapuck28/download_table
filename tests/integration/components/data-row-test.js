// Test file
import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-download-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('rowData', {
      name: 'Example Name',
      path: '/example/path',
      device: 'Example Device',
      status: 'available',
      isChecked: true,
    });

    // Render the component with test data
    await render(
      hbs`<DataRow @dataRow={{this.rowData}} @name={{this.rowData.name}} @status={{this.rowData.status}}/>`,
    );

    // Assert that the component renders without errors
    assert.dom('.data-row').exists();
    assert.dom('.data-name').hasText('Example Name');
    assert.dom('td:nth-child(5)').hasText('available');
  });
});
