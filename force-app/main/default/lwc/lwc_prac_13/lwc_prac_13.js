import { api, LightningElement, wire } from 'lwc';
import srchacc from '@salesforce/apex/cls_3.srchacc';

import ACC_ID from '@salesforce/schema/Account.Id';
import ACC_NAME from '@salesforce/schema/Account.Name';
import ACC_PHONE from '@salesforce/schema/Account.Phone';
import ACC_IND from '@salesforce/schema/Account.Industry';
import ACC_RATING from '@salesforce/schema/Account.Rating';

import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  // this import is very important

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', type: 'text', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Industry', fieldName: 'Industry', type: 'text', editable: true },
    { label: 'Rating', fieldName: 'Rating', type: 'text', editable: true }
];

export default class Lwc_prac_13 extends LightningElement {

    columnn = COLUMNS;
    st = '';                 
    @api mydata;             
    @api myerror;            
    draftValues = [];        

    // Capture search text
    capst(event) {
        this.st = event.target.value;
    }

    // Handle inline save
    handleSave(event) {
        const updated = event.detail.draftValues[0];

        const fields = {};
        fields[ACC_ID.fieldApiName] = updated.Id;
        fields[ACC_NAME.fieldApiName] = updated.Name;
        fields[ACC_PHONE.fieldApiName] = updated.Phone;
        fields[ACC_IND.fieldApiName] = updated.Industry;
        fields[ACC_RATING.fieldApiName] = updated.Rating;

        updateRecord({ fields })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Success",
                        message: "Record updated successfully",
                        variant: "success"
                    })
                );

                this.draftValues = [];  
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Error updating record",
                        message: error.body.message,
                        variant: "error"
                    })
                );
            });
    }

    // Wire Apex to get data
    @wire(srchacc, { srchtxt: '$st' })
    wiredAcc({ data, error }) {
        if (data) {
            this.mydata = data;
        } else if (error) {
            this.myerror = error;
        }
    }
}
