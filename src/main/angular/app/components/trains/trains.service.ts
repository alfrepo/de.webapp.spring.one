import {Injectable} from '@angular/core';
// import {HttpParams, Response} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {ArrayObservable} from "rxjs/observable/ArrayObservable";
import {environment} from "../../../environments/environment";

@Injectable()
export class TrainsService {
  constructor(private http: Http) {
  }

/*  public getUsers(): Observable<User[]> {
    let uri: string = environment.apiUri;

    if (!document.location.hostname || document.location.hostname === 'localhost') {
      uri = environment.backendBase + uri;
    }

    let observable: Observable<User[]> =
      this.http.get(uri)
        .map((response: Response) => response.json()._embedded['users'])
        .catch(this.handleError);

    return observable;
  }

  private handleError(error: any) {
    let errMsg = 'UsersService: cannot get users from http server.';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }*/
}
