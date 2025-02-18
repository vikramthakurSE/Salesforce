import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track isVisible = false;

    handleToggleChange(event) {
        this.isVisible = event.target.checked;
    }
}