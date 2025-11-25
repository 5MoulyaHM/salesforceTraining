import { api, LightningElement , wire } from 'lwc';
import srchacc from '@salesforce/apex/cls_3.srchacc';
import SayHi from '@salesforce/apex/cls_3.SayHi';
import SayBye from '@salesforce/apex/cls_3.SayBye';



var clm = [
    {label: 'Account Name' , fieldName : 'Name', type:'text' },
    {label:'Phone' , fieldName: 'phone' , type: 'phone'},
    {label: 'Industry' , fieldName:'Industry' , type:'text'},
    {label:'Account Rating' , fieldname: 'Rating' , type:'text'}
];

export default class Lwc_prac_11 extends LightningElement {

    columnn = clm;
    st='';

   @api mydata;
   @api myerror;
    mymsg;

    capst(event){
        this.st  = event.target.value
        
    }
//two way to do tjis  
//so 
//below 1 
    //wire a property
   // @wire(srchacc,{srchtxt:'$st' }) mou; //(this line for yhe wire aproperty)
    @wire(SayHi) sharukhkhan;
 //mou is not variable not method  mou is property  , we are gettig the ata directky from the property 
  ///wire a function
  

 

 @wire(SayHi) moulya({data,error}){
    if(data){
       this.mymsg = data;
    }
    else{
        alert(error);
    }
 };





}

//now u can serach for theat paticular account record just by serching 