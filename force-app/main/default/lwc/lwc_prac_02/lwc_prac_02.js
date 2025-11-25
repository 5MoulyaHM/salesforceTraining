import { LightningElement } from 'lwc';

export default class Lwc_prac_02 extends LightningElement {
    num = 300;
    callme(event){
        alert('the number entered is ' + this.num);
    }
    capnum(event){
        this.num = event.target.value;
    } 

}


