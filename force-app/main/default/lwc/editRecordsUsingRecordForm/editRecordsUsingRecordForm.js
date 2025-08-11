import { LightningElement,api } from 'lwc';

const FIELDS = ['CaseNumber','Reason','Type'];
export default class EditRecordsUsingRecordForm extends LightningElement {
    @api recordId;
    fields = FIELDS;
}