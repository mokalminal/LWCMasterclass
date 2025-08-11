import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHooks extends LightningElement {
    
    constructor(){
        super();
        console.log('Parent - Constructor is called!');
    }
    connectedCallback(){
        console.log('Parent - Connected Callback is called');
    }
    renderedCallback(){
        console.log('Parent - Rendered Callback is called');
    }
    disconnectedCallback(){
        console.log('Parent - Component had done what it was supposed to do!');
       
    }
    errorCallback(){
        console.log(stack + '----' + track);
    }

}