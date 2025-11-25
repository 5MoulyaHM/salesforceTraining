import { LightningElement } from 'lwc';
import createacc from '@salesforce/apex/cls_1.createacc';     


export default class Lwc_prac_8 extends LightningElement {
    nam;
    phn;
    ind;
    rat;

    capnam(event){
        this.nam = event.target.value;

    }
    
    capphn(event){
        this.capphn = event.target.value;

    }
    
    capind(event){
        this.capind = event.target.value;   

    }
    
    caprat(event){
        this.caprat = event.target.value;

    }
    saveme(event){ 
        createacc({
            'accname':this.nam,
            'accphn':this.phn,
            'accind':this.ind,
            'accrat':this.rat
       

        }).then(result=>{
            alert(result);

        }).catch(error=>{
            alert('an error has occured while creating the account');


        });
}
}