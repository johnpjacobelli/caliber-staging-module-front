export class SwotItem {

    id: number;
    content: string;
    type: string;
    comment: string;
    swotAnalysisId: number;



    constructor(id: number, content: string, type: string, comment: string, swotAnalysisId?: number) {

        if (swotAnalysisId) {
            this.id = id;
            this.content = content;
            this.swotAnalysisId = swotAnalysisId;
            this.type = type;
            this.comment =comment;
        } else {
            this.id = id;
            this.content = content;
            this.type = type;
            this.comment = comment;
        }

    }


}
