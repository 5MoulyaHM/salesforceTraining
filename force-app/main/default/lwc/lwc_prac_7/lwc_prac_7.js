import { LightningElement } from 'lwc';

export default class Lwc_prac_7 extends LightningElement {

p;
T;
R;
SI;
EMI;


  caploanamt(event){
    this.p = event.target.value;

 }
 caploanten(event){
    this.T = event.target.value;

 }
 caploanint(event){
    this.R = event.target.value;

 }
 calcme(event){
    this.SI=(this.p * this.T * this.R)/100;
    alert('the monthly EMI will be '+this.SI);
    this.EMI = (parseInt(this.SI)+parseInt(this.p)/parseInt(this.T * 12));
    alert('the monthly emi will be ' +this.EMI);


 }
 clearme(event){
    this.p = null;
    this.T =  null;
    this.R= null;
    this.SI = null;
    this.EMI = null;
    


 }



}