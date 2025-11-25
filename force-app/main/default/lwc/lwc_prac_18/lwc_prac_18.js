import { LightningElement } from 'lwc';

export default class Lwc_prac_18 extends LightningElement {
    msg;

    sendme(event){
        //create and dispatch DOM EVENT  ( event that comes from dom not html)
        this.dispatchEvent(new CustomEvent('evtmsgsend',{detail:this.msg}));
    }    

    CapMsg(event){
        this.msg = event.target.value;
    }
}//  this is another example of parent to child

