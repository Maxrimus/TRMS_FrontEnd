import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  incorrectLogin: boolean;

  constructor(private router:Router, private http:HttpClient, private userService:UserService) {
    this.incorrectLogin = false;
   }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    let credentials = { username: "", password:""};
    if(username) credentials.username = username;
    if(password) credentials.password = password;

    var result = false;

    this.http.post<Employee>("http://localhost:8080/login",credentials).subscribe(response => {
      result = response.verified;
      if(result){
        this.userService.setCurrentUser(response.firstName);
        this.userService.setUserId(response.id);
        switch(response.title){
          case 'Employee':
            this.router.navigate(['dashboard']);
            break;
          case 'Supervisor':
            this.router.navigate(['supervisor-login']);
            break;
          case 'BenCo':
            this.router.navigate(['benco-login']);
            break;
          default:
            this.router.navigate(['supervisor-login']);
            break;
        }
      }
      else{
        this.incorrectLogin = true;
      }
    });
  }
}
