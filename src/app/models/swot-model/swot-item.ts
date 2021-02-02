export class SwotItem {

    id: number;
    content: string;
    type: string;
    swotAnalysisId: number;
    swotName: string;



    constructor(id: number, content: string, type: string, swotName: string, swotAnalysisId?: number) {

        if (swotAnalysisId) {
            this.id = id;
            this.content = content;
            this.swotAnalysisId = swotAnalysisId;
            this.type = type;
            this.swotName = swotName
        } else {
            this.id = id;
            this.content = content;
            this.type = type;
            this.swotName = swotName;
        }

    }


}
