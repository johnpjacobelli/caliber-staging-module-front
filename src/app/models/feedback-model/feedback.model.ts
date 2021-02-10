export class Feedback {

    id:number;
    managerId: number;
    date: Date;
    content: string;
    associateId: number;

    constructor(id:number,
        managerId: number,
        content: string,
        associateId: number){

        if(associateId){
            this.id = id;
            this.managerId = managerId;
            this.date = new Date();
            this.content = content;
            this.associateId = associateId
        }else{
            this.id = id;
        }
    }
}