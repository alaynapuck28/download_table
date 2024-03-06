
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import fetch from 'fetch';

export default class DashboardRoute extends Route {
  @service store;

  async model() {
    let response = await fetch('/api/data.json');
    let data = await response.json();
    console.log(data);

    let records = data.dataRow.map((datum) => {
      return this.store.createRecord('data-row', {
        name: datum.name,
        path: datum.path,
        device: datum.device,
        status: datum.status,
        isChecked: datum.isChecked
      });
    });

    // Wait for all promises to resolve and then return the array of records
    return Promise.all(records);
  }
}
