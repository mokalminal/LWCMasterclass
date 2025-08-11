import { LightningElement } from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName="Case"

    handleSubmit(event){
        console.log('Form is submitted for the Case Creation' + JSON.stringify(event.detail));
    }
    handleSuccess(event){
        alert('Case has been successfully created!' + JSON.stringify(event.detail));
    }
    }

