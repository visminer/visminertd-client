export class Bug {

    rank: number;
    rank_category: string;
    priority: number;
    priority_category: string;
    type: string;
    abbreviation: string;
    description: string;
    category: string;
    class: string;
    field: string;
    method: string;
    local_variable: string;
    short_message: string;
    long_message: string;

}

export class FindBugs {

    _id: string;
    reference: string;
    commit: string;
    _commit_date: Date;
    repository: string;
    filename: string;
    filehash: number;
    bugs: Bug[];

    get commit_date() {
        return this._commit_date;
    }

    set commit_date(date: any) {
        this._commit_date = new Date(date);
    }

}
