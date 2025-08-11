import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track selectedOption = '';

    handleOptionClick(event) {
        this.selectedOption = event.target.label;
    }

    get showOption1() {
        return this.selectedOption === 'Option 1';
    }
    get showOption2() {
        return this.selectedOption === 'Option 2';
    }
    get showOption3() {
        return this.selectedOption === 'Option 3';
    }
}

