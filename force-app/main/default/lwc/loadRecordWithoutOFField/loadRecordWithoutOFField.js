import { api, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import STATUS_FIELD from '@salesforce/schema/Case.Status';

export default class LoadRecordWithoutOFField extends LightningElement {
    @api recordId;

    fields = [CASE_NUMBER, ORIGIN_FIELD, STATUS_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' }) caseVar;

    get casenumber() {
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get origin() {
        return getFieldValue(this.caseVar.data, ORIGIN_FIELD);
    }

    get status() {
        return getFieldValue(this.caseVar.data, STATUS_FIELD);
    }
}
