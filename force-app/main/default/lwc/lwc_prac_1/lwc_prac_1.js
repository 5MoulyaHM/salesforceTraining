import { LightningElement } from 'lwc';

export default class Lwc_prac_1 extends LightningElement {
    name="moulya";
    age = 21;
    salary = 500;
    moredetails= {"city":"hyd","state":"telangana"}

    subme(event){
        this.name ="salmankhan";
        this.age = 18;
        this.salary = 40000;
    }
}