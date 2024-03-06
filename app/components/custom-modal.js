import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CustomModalComponent extends Component {
  @action
  closeModal() {
    this.args.onClose();
  }
}
