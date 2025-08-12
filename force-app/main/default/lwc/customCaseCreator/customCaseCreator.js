import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CASE_OBJ from '@salesforce/schema/Case';
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESCRIPTION from '@salesforce/schema/Case.Description';
import RECID from '@salesforce/schema/Case.RecordTypeId';

export default class CustomCaseCreator extends LightningElement {
    subject = '';
    priority = '';
    description = '';
    recordTypeId = '';

    @wire(getObjectInfo, { objectApiName: CASE_OBJ })
    caseRecord({ data, error }) {
        if (data) {
            let recordTypeDetails = data.recordTypeInfos;
            Object.keys(recordTypeDetails).forEach(key => {
                const recordTypeInfo = recordTypeDetails[key];
                if (recordTypeInfo.name === 'SMS Support Cases') {
                    this.recordTypeId = recordTypeInfo.recordTypeId;
                }
            });
        } else if (error) {
            console.error('Error fetching object info:', error);
        }
    }

    get options() {
        return [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
        ];
    }

    populateSubject(event) {
        console.log(event.target.value);
        this.subject = event.target.value;
    }

    populatePriority(event) {
        console.log(event.detail.value);
        this.priority = event.detail.value;
    }

    populateDescription(event) {
        console.log(event.target.value);
        this.description = event.target.value;
    }

    async createCase() {
        try {
            const fields = {};
            fields[SUBJECT.fieldApiName] = this.subject;
            fields[PRIORITY.fieldApiName] = this.priority;
            fields[DESCRIPTION.fieldApiName] = this.description;
            fields[RECID.fieldApiName] = this.recordTypeid;

            let recordInput = { apiName: CASE_OBJ.objectApiName, fields };
            
            const record = await createRecord(recordInput);
            alert('Your Case has been successfully submitted: ' + record.id);
            
            // Reset form after successful creation
            this.subject = '';
            this.priority = '';
            this.description = '';
            
        } catch (error) {
            console.error('Error creating case:', error);
            alert('Sorry, something went wrong: ' + (error.body ? error.body.message : error.message));
        }
    }
}
