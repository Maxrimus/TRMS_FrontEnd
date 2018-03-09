import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Application } from '../../application';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supervisor-login',
  templateUrl: './supervisor-login.component.html',
  styleUrls: ['./supervisor-login.component.css']
})
export class SupervisorLoginComponent implements OnInit {

  private forms:Application[];

  constructor(private router:Router, private userService:UserService, private http:HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
   if(this.userService.getUserId() != -1){
     console.log("Loading forms");
     this.loadForms();
   } 
  }

  loadForms(){
    var id = this.userService.getUserId();

    let toSend = { id:-1, type:"pending" };
    if(id) toSend.id = id;

    var result = false;
    
    this.http.post<Application[]>("http://localhost:8080/supervisor",toSend).subscribe(response=>{
      this.forms=response;
      console.log("Forms loaded");
    });
  }

  approve(e){
    var id = this.userService.getUserId();

    let body = { id:-1, appId:e.target.attributes[2].value, type:"accept"};
    if(id) body.id = id;

    var result = false;
    
    this.http.post<boolean>("http://localhost:8080/approvals",body).subscribe(response=>{
      console.log(response);
      result = response;
    });
  }

  deny(e){
    var id = this.userService.getUserId();

    let body = { id:-1, appId:e.target.attributes[2].value, type:"deny"};
    if(id) body.id = id;

    var result = false;
    
    this.http.post<boolean>("http://localhost:8080/approvals",body).subscribe(response=>{
      console.log(response);
      result = response;
    });

  }
}
