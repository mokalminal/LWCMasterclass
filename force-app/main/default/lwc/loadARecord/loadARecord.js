import CaseNumber from '@salesforce/schema/Case.CaseNumber';
import Priority from '@salesforce/schema/Case.Priority';
import Status from '@salesforce/schema/Case.Status';
import { LightningElement, api } from 'lwc';

export default class LoadARecord extends LightningElement {
    @api recordId;
    objectApiName = 'Case' ;
    fields=['CaseNumber', 'Priority', 'Status'];
}