// app/controllers/application.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked checkedStatus = false;
  @tracked someChecked = false;

  @action
  selectAll(event) {
    let isChecked = event.target.checked;
    this.model.forEach((row) => {
      set(row, 'isChecked', isChecked);
    });
  }

  @action
  updateChecked(dataRow, isChecked) {
    dataRow.set('isChecked', isChecked);
    this.someChecked = this.areSomeSelected()
    this.checkedStatus =this.model.every((row) => row.isChecked)
  }

  @action
  areSomeSelected() {
    return (
      this.model.some((row) => row.isChecked) &&
      !this.model.every((row) => row.isChecked)
    );
  }


}
