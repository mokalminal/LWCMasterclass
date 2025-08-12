import { LightningElement,wire } from 'lwc';
import fetchTaskBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';
export default class SearchTaskBySubject extends LightningElement {
    
    taskList;
    subjectText = 'Follow Up';

    @wire(fetchTaskBySubject, {subjectString: '$subjectText'})
    wiredTasks({data,error}){
        if(data){
            this.taskList = data;

        }
        else if(error){
            console.log('Error: Something went wrong' + error.body.message);

    }
}
}