
import { LightningElement,api } from 'lwc';  // sc imperation

//import {api} from 'lwc';
//import {wire} from 'lwc';

import { createRecord } from 'lightning/uiRecordApi';  // we are importing from javascript api which is prediefined    create record not property ...its property of ui record api( dictonary which is written or previously know by salesforce )

import CONTACTOBJ from '@salesforce/schema/contact'; //this is the method which has been already written


export default class Lwc_prac_12 extends LightningElement {

    @ api frstnm;
    @api lstnm;
    @api eml;
    @api phn;
  // u can individually call or else u can also mention above  import {api} from 'lwc';   this 
    capfname(event){
        this.frstnm = event.target.value;

    }
    caplname(event){
        this.lstnm = event.target.value;
    }
    capeml(event){
        this.eml = event.target.value;
        
    }
    capphn(event){
        this.phn = event.target.value;
        
    }
    SaveMe(event){  // so far above code we have captyred all the data so now its of storimg the data in salefsorce 

        //step1   -------> create a field mapping
        const fields = {
                    FirstName:this.frstnm,
                    LastName: this.lstnm,
                    Email:this.eml,
                    Phone:this.phn
        };

        //step 2  ---------> create a record mapping 

        const recordInput = {

            apiName : CONTACTOBJ.objectApiName,fields};


        //step 3 ----------> call for imperation and pass record mapping
        
        createRecord(recordInput).then(result=>{
            alert('contact successfully created with contact id'+result.Id)  // wrore this when the  ccontact wqs not getting savesd to check what was an errir 
        }).catch(error=>{
            alert('Error'+ error);});
        //structire byheart
    }
}