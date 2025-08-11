import { LightningElement } from 'lwc';

export default class BindingVariables extends LightningElement {
    userName = 'Minal';
    currentTime = new Date().toLocaleString();
    subscriberScore = 9;
    totalLessonsWatched = 50*10;
    memberStatus = '';

    updateMemberStatus(event){
        this.memberStatus = event.target.value;
    }

    _minutesWatched = (this.totalLessonsWatched *10);
    get minutesWatched(){
        return this._minutesWatched;
    }
    set minutesWatched(value) {
        this._minutesWatched = value < 1000 ? value : 5000
    }
    handleWatchedChange(event){
        this.minutesWatched = event.target.value;


    }
}