import { LightningElement } from 'lwc';

import cardImage from '@salesforce/resourceUrl/salesforccard';
import successIcon from '@salesforce/resourceUrl/successGreen';

export default class Task_1m extends LightningElement {
    cardImage = cardImage;
    successIcon = successIcon;

    customerNumber = "1234 567 8910 5678";
    accountNumber = "1234 567 8910 5678";
    openedDate = "26/04/2023";
    fundingBalance = "Not yet funded";
}
