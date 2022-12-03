import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
  }

  public onCreateButtonClick() {
    this.api.CreateRoom({id: this.generateId()}).then((data) => {
      this.router.navigate(['/room/' + data.id]);
    });
  }

  // generates random string as a unique room id
  private generateId():string {
    return Math.random().toString(16).slice(2);
  }

}
