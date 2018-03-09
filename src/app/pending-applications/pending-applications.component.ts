import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Application } from '../../application';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pending-applications',
  templateUrl: './pending-applications.component.html',
  styleUrls: ['./pending-applications.component.css']
})
export class PendingApplicationsComponent implements OnInit {

  private forms:Application[];

  constructor(private router:Router, private userService:UserService, private http:HttpClient) {}

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

  ngAfterViewInit(){
   if(this.userService.getUserId() != -1){
     this.loadForms();
   } 
  }

  loadForms(){
    var id = this.userService.getUserId();

    let toSend = { id:-1, type:"pending" };
    if(id) toSend.id = id;

    var result = false;
    
    this.http.post<Application[]>("http://localhost:8080/employee",toSend).subscribe(response=>{
      this.forms=response;
    });
  }
}
