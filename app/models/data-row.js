import Model, { attr } from '@ember-data/model';

export default class DataRowModel extends Model {
  @attr('string') name;
  @attr('string') device;
  @attr('string') path;
  @attr('string') status;
  @attr('boolean') isChecked;
}
