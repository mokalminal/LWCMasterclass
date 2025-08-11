import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Gargi';

    handleNameChange(){
        this.userName = 'Minal';   
    }
    constructor(){
        super();
        console.log('Constructor is called!');
    }
    connectedCallback(){
        console.log('Connected Callback is called');
    }
    renderedCallback(){
        console.log('Rendered Callback is called');
    }
    disconnectedCallback(){
        console.log('Component had done what it was supposed to do!');
       
    }
    errorCallback(){
        console.log(stack + '----' + track);
    }

}