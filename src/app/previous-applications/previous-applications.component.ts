import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Application } from '../../application';

@Component({
  selector: 'app-previous-applications',
  templateUrl: './previous-applications.component.html',
  styleUrls: ['./previous-applications.component.css']
})
export class PreviousApplicationsComponent implements OnInit {

  private forms:Application[];

  constructor(private router:Router, private http:HttpClient, private userService:UserService) { }

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

    let toSend = { id:-1, type:"completed" };
    if(id) toSend.id = id;

    var result = false;
    
    this.http.post<Application[]>("http://localhost:8080/employee",toSend).subscribe(response=>{
      this.forms=response;
    });
  }
}
