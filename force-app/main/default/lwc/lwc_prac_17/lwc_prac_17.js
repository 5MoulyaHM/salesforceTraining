import { LightningElement } from 'lwc';   // this is the parent of 17
   
export default class Lwc_prac_17 extends LightningElement {

    vol=0;
    label = "Awaiting Button click..."

    increasethevol(event){
    if(this.vol >=0 && this.vol<100){
         this.vol = this.vol+1; //because im increasing 
    }
    this.label = event.detail;  // detail acts as an key 
    }

    decreasethevol(event){
        if(this.vol >= 0 && this.vol<100){
        this.vol = this.vol - 1;  // here we are calli the parnet 

    }
    this.label = event.detail;
}
}