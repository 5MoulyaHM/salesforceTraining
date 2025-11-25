import { LightningElement } from 'lwc';   // so this is a child 

export default class Lwc_prac_16 extends LightningElement {
    increme(event){  // in saelsforce we create a event using a custom event function 
           // to createb event we have two steps 

           //a.create event (using custom event fucntion ) that means not lwc event dom events 

        // step 1 . create a dom event by calling the custom event function 
        // name of the custom event should always be smaller not caps not nno n all
         const inc = new CustomEvent('evtinc', {detail:"Volume Increase"});  // custom event and u are giving a name for event 
         //we can not only pass a event from childm but also we can pass value (by using detail which is an actually predefined) 
         //step 2 -----> Dispatch Event 
         this.dispatchEvent(inc);  //
    }
    decreme(event){
        //step 1 + step 2 ----> create and dispatch event 
        this.dispatchEvent(new CustomEvent('evtdec' , {detail: 'Decrease Volume'}));  // this is anther method in a  line only u are creating the event and dispatching it 



    }
}