import { LightningElement, wire } from 'lwc';
import fetchCases from '@salesforce/apex/independentWireController.getCases';
import fetchTasks from '@salesforce/apex/independentWireController.getTasks';

export default class IndependentWires extends LightningElement {
    foundCases = false;
    foundTasks = false; // keep plural

    caseList;
    taskList;

    @wire(fetchCases)
    wiredCases({ data, error }) {
        if (data) {
            this.caseList = data;
            this.foundCases = true;
        } else if (error) {
            this.caseList = undefined;
        }
    }

    @wire(fetchTasks)
    wiredTasks({ data, error }) {
        if (data) {
            this.taskList = data;
            this.foundTasks = true; // fixed to plural
        } else if (error) {
            this.taskList = undefined; // fixed lowercase t
        }
    }
}
