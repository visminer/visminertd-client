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

}
