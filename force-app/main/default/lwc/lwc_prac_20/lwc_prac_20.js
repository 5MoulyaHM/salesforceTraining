import { LightningElement } from 'lwc';

export default class Lwc_prac_20 extends LightningElement {

    enam;
    eage;
    esal;
    ecity;

    CapName(event){
        this.enam = event.target.value;
    }
    CapAge(event){
        this.eage = event.target.value;


    }
    CapSal(event){
        this.esal = event.target.value;

    }
    CapCity(event){
        this.ecity = event.target.value;

    }
    subme(event){  // ill call dispach even inaide that ill csll the  custom event 
        this.dispatchEvent(new CustomEvent('evtemp',{detail:{en:this.enam,ag:this.eage,sl:this.esal,ct:this.ecity}}));   // four keys four values 

    }
}


// this 18th one is where u are entering the data and displaying itin the  another lwc component