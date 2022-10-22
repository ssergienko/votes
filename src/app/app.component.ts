import { Component } from '@angular/core';
import { APIService, User } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'votes';

  public users: Array<User> = [];

  constructor(private api: APIService) {

  }

  async ngOnInit() {
    /* fetch users when app loads */
    this.api.ListUsers().then((event) => {
      this.users = event.items as User[];
    });
    console.log(this.users);
  }

}
