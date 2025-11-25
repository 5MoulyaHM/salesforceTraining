import { LightningElement } from 'lwc';

export default class Lwc_prac_03 extends LightningElement {
    num1;
    num2;
    num3;
    result;
    capnum1(event){
        this.num1=event.target.value;



    }
    capnum2(event){
        this.num2=event.target.value;


    }
    capnum3(event){
        this.num3=event.target.value;


       


    }
    calcme(event){
        if(parseInt(this.num1) > parseInt(this.num2) && parseInt(this.num1) > parseInt(this.num3)){
            this.result=this.num1;
        }
        else if(parseInt(this.num2) >parseInt(this.num1) && parseInt(this.num2)> parseInt(this.num3)){
            this.result=this.num2;
        }
        else{
            this.result=this.num3;
        }

        

    }
    clearme(event){
        this.num1 = null;
        this.num2 = null;
        this.num3 = null;
        this.result = null;
        
        

    }

}