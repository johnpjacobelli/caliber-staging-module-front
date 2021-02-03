export class SwotItem {

    id: number;
    content: string;
    type: string;
    swotAnalysisId: number;



    constructor(id: number, content: string, type: string, swotAnalysisId?: number) {

        if (swotAnalysisId) {
            this.id = id;
            this.content = content;
            this.swotAnalysisId = swotAnalysisId;
            this.type = type;
        } else {
            this.id = id;
            this.content = content;
            this.type = type;
        }

    }


}
