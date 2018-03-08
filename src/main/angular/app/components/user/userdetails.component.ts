import {Component} from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';

@Component({
  selector: 'chat-messages',
  templateUrl: 'userdetails.component.html',
  providers: [UsersService],
})
export class UsersDetailsComponent {
  private users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(
        (users: User[]) => this.users = users,
        error => console.error(''));
  }
}
