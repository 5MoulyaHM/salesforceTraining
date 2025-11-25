import { LightningElement } from 'lwc';

// data display here if data entry (20)

export default class Lwc_prac_21 extends LightningElement {
    
    nam;
    age;
    sal;
    city;

    callme(event){
        this.nam = event.detail.en;
        this.age = event.detail.ag;
        this.sal = event.detail.sl;
        this.city = event.detail.ct;
    }
}
