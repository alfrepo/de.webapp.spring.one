import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
// import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../../environments/environment";
import {Location} from './location';

@Injectable()
export class LocationsService {
  constructor(private http: HttpClient) {
  }

  public getLocations(): Observable<Location[]> {
    let uri: string = environment.trainsBase + environment.trainsLocationsApiUri + '/' + environment.trainsLocationDashboard;



    let l:  Observable<Location[]> = this.http
      .get<Location[]>(uri)
      .catch(e => this.handleError(e));

    // this.http
    //   .get(uri)
    //   .subscribe(
    //     val => console.log('Value emitted successfully', val),
    //     error => {
    //       console.error("This line is never called ", error);
    //     },
    //     () => console.log("HTTP Observable completed...")
    //   );

    return l;
  }

  private handleError(error: any) {
    let errMsg = 'TrainsService: cannot get users from http server.';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
