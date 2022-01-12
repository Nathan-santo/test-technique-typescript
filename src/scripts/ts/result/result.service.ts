import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {
  results: ResultModel[];

  constructor() {
    this.results = [];
   }

  public addResult(newResult:ResultModel) {
    this.results.push(newResult);
  }

  public seenResult(idResult:number) {

  }

  public unseenResult(idResult:number) {

  }

  public getAllResult() : Array<ResultModel> {
    return this.results;
  }

  public getAllResultSeen() : Array<ResultModel> {
    return [];
  }

  public getAllResultUnSeen() : Array<ResultModel> {
    return [];
  }

  public numberOfEventSeen() : number
  {
    return 0;
  }
}
