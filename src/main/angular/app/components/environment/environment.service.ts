import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../../environments/environment";
import {Variable} from "./variable";


@Injectable()
export class EnvironmentService{
  constructor(private http: HttpClient) {
  }

  public getVariables(): Observable<Variable[]> {
    let uri: string = environment.backendApiUriEnvironment;

    if (!document.location.hostname || document.location.hostname === 'localhost') {
      uri = environment.backendBase + uri;
    }

    let observable: Observable<Variable[]> =
      this.http.get<{ _embedded: { variables: Variable[] } }>(uri)
      .map((myjson) => myjson._embedded['environment'])
      .catch(this.handleError);

    return observable;
  }

  private handleError(error: any) {
    let errMsg = 'EnvironmentService: cannot get variables from http server.';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


