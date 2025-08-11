import { LightningElement, api,track } from 'lwc';

export default class VariableUnderstanding extends LightningElement {
    memberName = 'Gargi'; // private variable
    
    @api myFavTeam = "Mumbai Indians";

   @track myPersonality = {
    name: "Gargi",
    age: 40,
   }
     // This is a public variable, i can use it in the outside of this class

}