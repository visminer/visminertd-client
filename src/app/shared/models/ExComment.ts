export class Heuristic {

    description: string;
    status: number;
    score: number;

}

export class Pattern {

    name: string;
    score: number;
    class: string;
    theme: string;
    tdtype: string;

}

export class Comment {

    id: number;
    total_pattern: number;
    total_heuristic: number;
    total_score: number;
    comment: string;
    class: string;
    method: string;
    patterns: Pattern[];
    heuristics: Heuristic[];

}

export class ExComment {

    _id: string;
    reference: string;
    commit: string;
    _commit_date: Date;
    repository: string;
    filename: string;
    filehash: number;
    comments: Comment[];

    get commit_date() {
        return this._commit_date;
    }

    set commit_date(date: any) {
        this._commit_date = new Date(date);
    }

}
