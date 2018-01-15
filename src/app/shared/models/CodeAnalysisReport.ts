import { Repository } from "./Repository";

    export class FilesReport {
    
        _id: string;
        totalFiles: number;
    
    }
    
    export class CodeAnalysisReport {
    
        _id: string;
        reference: string;
        commit: string;
        commit_date: Date;
        analysis_date: Date;
        repository: Repository;
        indicators: string[];
        types: string[];
    
    }