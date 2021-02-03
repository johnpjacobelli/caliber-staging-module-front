export class SwotItem {

    id: number;
    content: string;
    type: string;
    swotAnalysisId: number;
    description: string;



    constructor(id: number, content: string, type: string, description: string, swotAnalysisId?: number) {

        if (swotAnalysisId) {
            this.id = id;
            this.content = content;
            this.swotAnalysisId = swotAnalysisId;
            this.type = type;
            this.description = description
        } else {
            this.id = id;
            this.content = content;
            this.type = type;
            this.description = description;
        }

    }


}
