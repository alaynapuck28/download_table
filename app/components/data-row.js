import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DataRowComponent extends Component {
    constructor(){
        super(...arguments)
        this.status
       
    }
@tracked status;
@tracked dataRow

get isChecked() {
    return this.args.dataRow.isChecked ?? false;
  }


@action
handleCheckboxChanged(event) {
  const isChecked = event.target.checked;
  this.args.updateChecked(this.args.dataRow, isChecked);
}

}
