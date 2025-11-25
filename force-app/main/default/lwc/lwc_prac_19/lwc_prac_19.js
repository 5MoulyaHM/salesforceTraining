import { LightningElement } from 'lwc';

export default class Lwc_prac_19 extends LightningElement {
    msgfrmchld;

    callme(event)
{
    this.msgfrmchld = event.detail;
}}