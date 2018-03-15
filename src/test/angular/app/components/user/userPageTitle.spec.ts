import {User} from "../../../../../main/angular/app/components/user/user";
import {UsersService} from "../../../../../main/angular/app/components/user/users.service";
import {HttpClient} from '@angular/common/http';
import {inject} from "@angular/core/testing";

// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
  let service: UsersService;
  let http:HttpClient;
  beforeEach(() => { service = new UsersService(http); });

  it('#getValue should return real value', () => {
    expect(service.getPageTitle()).toBe('Users');
  });


});
