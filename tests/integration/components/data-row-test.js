import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-download-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DataRow />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DataRow>
        template block text
      </DataRow>
    `);

    assert.dom().hasText('template block text');
  });
});
