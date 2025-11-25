import { LightningElement } from 'lwc';

export default class Lwc_prac_6_2 extends LightningElement {



    aaa;
    ddd;

    capnum1(event){
        this.aaa = event.target.value;
    }
    capnum2(event){
        this.ddd = event.target.value;
    }

}