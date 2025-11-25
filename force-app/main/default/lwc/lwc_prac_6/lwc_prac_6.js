import { LightningElement,api} from 'lwc';

//default costructor --->   alerts and declaring var ex down

alert("hi good morning. This area betwwen import and export in lwc is the first to et executed  during the loading  ")


// manual constructor 


  
// we cannot use this area for calcultio whenever we are dependent on the coponent variables 

//this constructor can be used only when ocomp variable depenedency isnt there ex: table column creation 



export default class Lwc_prac_6 extends LightningElement {
@api num1;
@api num2;
result;

//0.2 manual construcor == logic eecutiob 
calcme(event){
    this.result = parseInt(this.num1) + parseInt(this.num2);
}

   

}