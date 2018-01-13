import { Repository } from "./Repository";
import { TDItem } from "./TDItem";

export class TDReport {
    
        _id: string;
        reference: string;
        commit: string;
        commit_date: Date;
        analysis_date: Date;
        repository: Repository;
        indicators: string[];
        debts: string[];
        technicaldebt: TDItem[];
    
}