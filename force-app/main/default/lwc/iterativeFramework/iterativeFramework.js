import { LightningElement } from 'lwc';

export default class IterativeFramework extends LightningElement {
    tasks = [
        { name: 'Prepare Video Script', status: 'In Progress' },
        { name: 'Record Tutorial', status: 'Pending' },
        { name: 'Edit & Upload', status: 'Pending' }
    ];

    get topPriority() {
        return this.tasks[0];
    }
    get leastPriority() {
        return this.tasks[this.tasks.length - 1];
    }
}