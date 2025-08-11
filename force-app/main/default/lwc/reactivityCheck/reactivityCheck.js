import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {
    userAddress = '19 Yemen Road,Yamen';

    updateAddress(){
        this.userAddress = '9 Yemen Road,Yamen';
    }
}