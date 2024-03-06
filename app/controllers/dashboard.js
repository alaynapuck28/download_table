import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked checkedStatus = false;
  @tracked someChecked = false;
  @tracked modalMessage = '';
  @tracked showModal = false;
  @tracked selectedNumberOfDownloads = 0;

  @action
  downloadSelectedRows() {
    // Filter selected rows based on isChecked property
    const selectedRows = this.model.filter((row) => row.isChecked);
    if (selectedRows.length > 0) {
      const message = selectedRows
        .map((row) => `${row.path} - ${row.device}`)
        .join('\n');
      // Set the modal message and open the modal
      this.modalMessage = message;
    } else {
      this.modalMessage = 'Please select files to download';
    }
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  selectAll(event) {
    let isChecked = event.target.checked;

    this.model.forEach((row) => {
      if (row.status == 'available') {
        set(row, 'isChecked', isChecked);
      }
    });
    this.updateCheckedStatus();
  }

  @action
  updateChecked(dataRow, isChecked) {
    dataRow.set('isChecked', isChecked);
    this.updateCheckedStatus();
  }

  updateCheckedStatus() {
    //controls state of select all checkbox
    const availableRows = this.model.filter(
      (row) => row.status === 'available',
    );
    this.selectedNumberOfDownloads = availableRows.reduce(
      (count, row) => (row.isChecked ? count + 1 : count),
      0,
    );

    this.checkedStatus = availableRows.every((row) => row.isChecked);
    this.someChecked =
      availableRows.some((row) => row.isChecked) && !this.checkedStatus;
  }

  @action
  areSomeSelected() {
    const availableRows = this.model.filter(
      (row) => row.status === 'available',
    );
    const checkedRows = this.model.filter((row) => row.isChecked);
    return (
      checkedRows.length > 0 && checkedRows.length !== availableRows.length
    );
  }
}
