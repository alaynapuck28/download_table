// Test file
import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-download-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set up test data with all required attributes
    this.set('rowData', {
      name: 'Example Name',
      path: '/example/path',
      device: 'Example Device',
      status: 'available',
      isChecked: true, // Include isChecked property
    });

    // Render the component with test data
    await render(hbs`<DataRow @dataRow={{this.rowData}} />`);

    // Assert that the component renders without errors
    assert.dom('.data-row').exists();
    assert.dom('.data-row-name').hasText('Example Name');
    // Add more assertions for other properties as needed
  });
});
