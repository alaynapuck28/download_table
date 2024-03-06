import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | custom-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<CustomModal @message="Hello, World!" />`);

    // Assert that the rendered modal contains the expected message
    assert
      .dom('.modal-body')
      .hasText('Hello, World!', 'Renders the expected message');
  });
});
