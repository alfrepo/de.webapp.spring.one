import {Component} from '@angular/core';
import {Train} from './train';
import {TrainsService} from './trains.service';
import {LocationsService} from "./locations.service";
import {Observable} from "rxjs/Observable";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'chat-messages',
  templateUrl: 'trains.component.html',
  providers: [TrainsService, LocationsService],
})
export class TrainsComponent {
  private locations: Observable<Location[]>;

  constructor(private trainsService: TrainsService, private locationsService: LocationsService) {
  }

  ngOnInit() {
    this.locations = this.locationsService.getLocations();
  }
}
