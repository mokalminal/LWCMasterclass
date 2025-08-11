import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {

    constructor(){
        super();
        console.log('Child - Constructor is called!');
    }
    connectedCallback(){
        console.log('Child - Connected Callback is called');
    }
    renderedCallback(){
        console.log('Child - Rendered Callback is called');
    }
    disconnectedCallback(){
        console.log('Child - Component had done what it was supposed to do!');
       
    }
    errorCallback(){
        console.log(stack + '----' + track);
    }

}