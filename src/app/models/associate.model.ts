export class Associate {
    id: number;
    salesforce_id: string;
    email: string;
    first_name: string;
    last_name: string;
    manager_id: number;
    batch_id: number;
     

    constructor(id: number,salesforce_id: string, email: string,  first_name: string,  last_name: string, manager_id: number,  batch_id: number){

        this.id = id;
        this.salesforce_id = salesforce_id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.manager_id = manager_id;
        this.batch_id =batch_id;
    }
}
