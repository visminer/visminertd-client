export class Occurrence {

    filename: string;
    filehash: number;
    begin_line: number;
    line_count: number;
    duplication_percentage: number;
    source_code_slice: string;

}

export class CPD {

    reference: string;
    commit: string;
    _commit_date: Date;
    repository: string;
    tokens_threshold: number;
    token_count: number;
    language: string;
    occurrences: Occurrence[];

    get commit_date() {
        return this._commit_date;
    }

    set commit_date(date: any) {
        this._commit_date = new Date(date);
    }

}
