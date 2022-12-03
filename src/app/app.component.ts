import { Component } from '@angular/core';
import { APIService, User } from './API.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private api: APIService, private router: Router) {

  }

  async ngOnInit() {

  }



}
