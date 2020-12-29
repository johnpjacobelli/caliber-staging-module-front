import { SwotItem } from './swot-item';

export class Swot {

    id: number;
    associateId: number;
    createdBy: number;
    createdOn: Date;
    lastModified: Date; 

    analysisItems: SwotItem[];

    constructor(){

        
        // this.id = 1;
        // this.associateId = 10;
        // this.createdBy = 20;
        this.createdOn = new Date();
        this.lastModified = new Date();
        
    }


}
