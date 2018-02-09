export class TDItemIndicator {

    name: string;
    occurrences: number;

}

export class TDItemDebt {

    name: string;
    value: number;

}

export class TDItem {

    _id: string;
    analysis_report: string;
    filename: string;
    filehash: number;
    indicators: TDItemIndicator[];
    debts: TDItemDebt[];
    responsible: string;
    description: string;
    intentional: number;
    principal: number;
    interest: number;
    interest_probability: number;
    commit: string;
    repository: string;
    reference: string;
    checked: boolean;

    private _commit_date: Date;

    get commit_date() {
        return this._commit_date;
    }

    set commit_date(new_commit_date: any) {
        this._commit_date = new Date(new_commit_date);
    }

}
