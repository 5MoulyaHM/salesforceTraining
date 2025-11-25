import { LightningElement, wire , api } from 'lwc'; //wire i sto get the data and api is to  make it public
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FLD from '@salesforce/schema/Opportunity.Name';
import STAGE_FLD from '@salesforce/schema/Opportunity.StageName';
import AMT_FLD from '@salesforce/schema/Opportunity.Amount';
import CDATE_FLD from '@salesforce/schema/Opportunity.CloseDate';
export default class Lwc_prac_14 extends LightningElement {
    @api recordId = '006Qy00000JfBQSIA3'; // u can also keep one but now if u add rp the record page it shws for all the rceord = '006Qy00000JfBQSIA3'; // so now using api its now public acccesssible 
    @wire(getRecord ,{recordId:'$recordId' , fields: [NAME_FLD,STAGE_FLD,AMT_FLD,CDATE_FLD]}) mou;// what all the field u wann retrove u gonna give herer  all the field value will be reuturned to mou 
    get oppName(){
        return getFieldValue(this.mou.data , NAME_FLD);  //in rupam theres a data called named field that shpuld go te oppname 
    }
    get oppStage(){
        return getFieldValue(this.mou.data , STAGE_FLD);
    }
    get oppAmt(){
        return getFieldValue(this.mou.data , AMT_FLD);
    }
    get oppCDate(){
        return getFieldValue(this.mou.data , CDATE_FLD);
    }
}  // this code is to get only infoemation of one record 