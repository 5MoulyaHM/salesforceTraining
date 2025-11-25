import { LightningElement , wire } from 'lwc';
 
import getAccounts from '@salesforce/apex/Lwc_wire.getAccounts';
import getContacts from '@salesforce/apex/Lwc_wire.getContacts';
import Id from '@salesforce/schema/AccountHistory.AccountId';
import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import Industry from '@salesforce/schema/Account.Industry';
import Rating from '@salesforce/schema/Account.Rating';
import ACC_OBJ from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';    
import { updateRecord } from 'lightning/uiRecordApi';
export default class Lwc_wire extends LightningElement {
    ID = Id;
    Name = Name;
    Phone = Phone;
    Industry = Industry;
    Rating = Rating;
 
    columns = [
        { label: 'Name', fieldName: 'Name',editable: true },
        { label: 'Phone', fieldName: 'Phone', type: 'phone',editable: true },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Rating', fieldName: 'Rating' }
    ];
    draftValues = [];
    contactColumns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];  
    contactList;
    errorMessage;
    @wire(getAccounts) accounts;
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contactList = data;
            console.log('objaect data',typeof(data))
        } else if (error) {
            this.errorMessage = error;
 
        }
    }
    handleSave(event) {
      const fields={};
      fields[this.ID.fieldApiName]=event.detail.draftvalues[0].Id;
      fields[this.Name.fieldApiName]=event.detail.draftvalues[0].Name;
      fields[this.Phone.fieldApiName]=event.detail.draftvalues[0].Phone;
      fields[this.Industry.fieldApiName]=event.detail.draftvalues[0].Industry;
      fields[this.Rating.fieldApiName]=event.detail.draftvalues[0].Rating;
      const recordInput={apiName :ACC_OBJ.objectApiName,fields};
      updateRecord(recordInput)
      .then(()=>{
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account updated',
                variant: 'success'
            })
        );
        this.draftValues=[];
      })
      .catch(error=>{
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error updating record',
                message: error.body.message,
                variant: 'error'
            })
        );
      });
     
    }
}


//public with sharing class Lwc_wire {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone, Industry, Rating FROM Account];
    }
    @AuraEnabled (cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact];
    }
}
 