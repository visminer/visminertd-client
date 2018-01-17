export class CodeMetrics {

    name: string;
    value: number;

}

export class Method {
    name: string;
    metrics: CodeMetrics[];
    codesmells: string[];
}

export class Clazz {

    name: string;
    type: string;
    metrics: CodeMetrics[];
    codesmells: string[];
    methods: Method[];

}

export class CodeAnalysis {

    _id: string;
    filename: string;
    filehash: number;
    metrics: CodeMetrics[];
    classes: Clazz[];
    analysis_report: string;
    reference: string;
    commit: string;
    commit_date: Date;
    repository: string;

}
