import { LightningElement } from 'lwc';

export default class enough2020 extends LightningElement {

    checkIcon = 'action:question_post_action';
    resultIcon = 'standard:task2';
    curretnDate;
    goalDate;
    daysUntil2020 = 0;
    messageStart = 'Sorry, It Lives for ';
    messageEnd = ' More Days';
    cardTitle = 'Is 2020 Over Yet?';
    dateMessage;
    notYet = false;

    connectedCallback(){
        this.goalDate = new Date(2021,0,1);
        this.currentDate = new Date();
        if((this.currentDate - this.goalDate) > 0){
            return;
        }else{
            this.notYet = true;
            let singleDay = 1000*60*60*24;
            this.daysUntil2020 = (Math.ceil((this.goalDate.getTime()-this.currentDate.getTime())/singleDay).toString());
            this.resultIcon = 'standard:first_non_empty';
        }
    }

}