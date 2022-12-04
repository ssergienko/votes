import { Component, OnInit } from '@angular/core';
import { APIService, RoomUser, RoomQuestion, Room } from '../API.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private routeSub: Subscription;

  public questions: RoomQuestion[] = [];
  public users: RoomUser[] = [];
  private interval: ReturnType<typeof setInterval>;
  private room: Room;

  constructor(private api: APIService, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      localStorage.setItem('room_id', params['id']);
      this.createUser();
    });
  }

  ngOnInit(): void {
    this.interval = setInterval(() => this.getOnlineUsers(), 1000);
  }

  private createUser() {
    const userId = localStorage.getItem('user_id');
    if(!userId) {
      this.api.CreateUser({
        id: this.generateId(),
        name: this.generateName()
      }).then((response) => {
        localStorage.setItem('user_id', response['id']);
        console.log('User created: ', response);
        this.addUserToRoom();
      });
    } else {
      this.addUserToRoom();
    }
  }

  private addUserToRoom() {
    this.api.ListRoomUsers({
        roomId: { contains: localStorage.getItem('room_id') },
        userId: { contains: localStorage.getItem('user_id')}
      }).then((roomUsers) => {
        if(!roomUsers.items.length) {
          this.api.CreateRoomUser({userId: localStorage.getItem('user_id'), roomId: localStorage.getItem('room_id')}).then((roomUser) => {
            console.log('User added to the room: ', roomUser);
        });
        this.getRoomQuestions();
        this.getOnlineUsers();
      }
    });
  }

  private getOnlineUsers():void {
    this.api.ListRoomUsers({
      roomId: { contains: localStorage.getItem('room_id') }
      }).then((roomUsers) => {
        console.log('Users online: ', roomUsers);
      });
  }

  private getRoomQuestions():void {
    this.api.ListRoomQuestions({
      roomId: {
        contains: localStorage.getItem('room_id')
      }}).then((questions) => {
        // this.questions = questions.items;
        console.log('Room questions: ', questions);
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    clearInterval(this.interval);
  }

  // generates random string as a unique room id
  private generateId():string {
    return Math.random().toString(16).slice(2);
  }

  private generateName():string {
    let names = ['Apple', 'Banana', 'Mango', 'Orange', 'Watermelon', 'Pear']; // array
    let index = Math.floor(Math.random() * names.length);
    return names[index];
  }

}
