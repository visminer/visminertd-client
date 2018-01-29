export class StyleProblem {

    line: number;
    column: number;
    message: string;
    severity: string;
    checker: string;

}

export class CheckStyle {

    _id: string;
    reference: string;
    commit: string;
    _commit_date: Date;
    repository: string;
    filename: string;
    filehash: number;
    style_problems: StyleProblem[];

    get commit_date() {
        return this._commit_date;
    }

    set commit_date(date: any) {
        this._commit_date = new Date(date);
    }

}
