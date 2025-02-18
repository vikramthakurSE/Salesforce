import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    courseName = "Salesforce, LWC Learning";

    changeHandler(event) {
        this.courseName = event.target.value;
    }

    num1 = 10;
    num2 = 20;
    sumTotal = this.num1+ this.num2;
    TotalSum = 0;

    get sum() {
        return this.sumTotal;
    }

    showSum(event) {
        this.TotalSum = this.sumTotal; 
    } 

}