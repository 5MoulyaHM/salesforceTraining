import { LightningElement,api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

import { NavigationMixin } from 'lightning/navigation';

export default class Lwc_prac_15 extends NavigationMixin(LightningElement) {
    @api recordId;
    delme(event)
    {
        deleteRecord(this.recordId).then(result=>{
       this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
            pageName:'home'
              // so based on this u can aslo keep  contact pr opportunity and sany other page u wannaa navigate if u require
        },
        });   // this navigationmixi not workig just knw the code


        }).catch(error=>{});
    }
}