import { LightningElement } from 'lwc';
import sendemail from '@salesforce/apex/cls_2.sendemail';

export default class Lwc_prac_9 extends LightningElement {

emladd;
emlsub;
emlbdy;

captoadd(event){
    this.emladd = event.target.value;
}
captsub(event){
    this.emlsub = event.target.value;
}
capbody(event){
    this.emlbdy = event.target.value;

}
sendmail(event){
    sendemail({
        'toadd': this.emladd,
        'Sub':this.emlsub,
        'emlbod':this.emlbdy
    }).then(result=>{
        alert(result);


    }).catch(error=>{
        alert('an error has occured while sending the email');
    });

}
}
