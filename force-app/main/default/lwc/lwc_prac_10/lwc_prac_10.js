import { LightningElement } from 'lwc';
import ACCNAME from '@salesforce/schema/Account.Name';
import ACCPHN from '@salesforce/schema/Account.phone';

export default class Lwc_prac_10 extends LightningElement {

recordId= '001Qy00001O7ZvEIAV';
obnam ='Account'

Name = ACCNAME;
phone = ACCPHN;

myfields = [ACCNAME, ACCPHN];

}