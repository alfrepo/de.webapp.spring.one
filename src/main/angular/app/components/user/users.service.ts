import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../../environments/environment";
import {User} from "./user";


@Injectable()
export class UsersService{
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    let uri: string = environment.backendApiUri;

    if (!document.location.hostname || document.location.hostname === 'localhost') {
      uri = environment.backendBase + uri;
    }

    let observable: Observable<User[]> =
      this.http.get<{ _embedded: { users: User[] } }>(uri)
      .map((myjson) => myjson._embedded['users'])
      .catch(this.handleError);

    return observable;
  }

  public getPageTitle(): String {
    return "Users"
  }

  private handleError(error: any) {
    let errMsg = 'UsersService: cannot get users from http server.';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


