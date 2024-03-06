import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DataRowComponent extends Component {
  @tracked status;
  @tracked showModal = false;

  get isChecked() {
    return this.args.dataRow?.isChecked ?? false;
  }

  get isDisabled() {
    // Determine if the checkbox should be disabled
    return this.args.dataRow?.status !== 'available';
  }

  @action
  handleCheckboxChanged(event) {
    const isChecked = event.target.checked;
    this.args.updateChecked(this.args.dataRow, isChecked);
  }

  @action
  handleClick() {
    // Check if the checkbox is disabled
    if (!this.isDisabled) {
      // Toggle the checkbox if it's not disabled
      const isChecked = !this.isChecked;
      this.args.updateChecked(this.args.dataRow, isChecked);
    } else {
      // Alert the user that download is not available
      this.showModal = true;
    }
  }
  @action
  closeModal() {
    // Close the modal
    this.showModal = false;
  }
}
