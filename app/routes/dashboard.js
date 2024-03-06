import Route from '@ember/routing/route';
import { service } from '@ember/service';
import fetch from 'fetch';

export default class DashboardRoute extends Route {
  @service store;

  async model() {
    let response = await fetch('/api/data.json');
    let data = await response.json();

    let records = data.dataRow.map((datum) => {
      return this.store.createRecord('data-row', {
        name: datum.name,
        path: datum.path,
        device: datum.device,
        status: datum.status,
        isChecked: datum.isChecked || false,
      });
    });

    return records;
  }
}
