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
    for (let pas = 0; pas < this.results.length; pas++) {
      const result = this.results[pas];
      if (idResult === result.id) {
        result.isSeen = true;
      }
      break
    }
  }

  public unseenResult(idResult:number) {

  }

  public getAllResult() : Array<ResultModel> {
    return this.results;
  }

  public getAllResultSeen() : Array<ResultModel> {
    const resultstrue = [];
    for (let pas = 0; pas < this.results.length; pas++) {
      const result = this.results[pas];
      if (result.isSeen) {
        resultstrue.push(result)
      };
    };
    return resultstrue;
  }

  public getAllResultUnSeen() : Array<ResultModel> {
    return [];
  }

  public numberOfEventSeen() : number
  {
    return 0;
  }
}
