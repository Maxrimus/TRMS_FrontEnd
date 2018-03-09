import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private currentUser:string;
  private userId:number;

  constructor() {
    this.currentUser = "";
    this.userId = -1;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(currentUser:string){
    this.currentUser = currentUser;
  }

  getUserId(){
    return this.userId;
  }

  setUserId(userId:number){
    this.userId = userId;
  }
}
