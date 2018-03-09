import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form } from '../../form';
import { UserService } from '../user.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  value:Date;
  compensation:Number;
  currentId:number;
  private submissionFailed = false;
  private submissionSent = false;

  constructor(private router:Router, private http:HttpClient, private userService:UserService) {
    this.compensation = 0;
    router.events.subscribe(() => {
      this.currentId = userService.getUserId();
   });
   }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

  sendApplication(e){
    e.preventDefault();
    console.log(e);

    var employeeId = this.currentId;
    console.log(employeeId);
    var address1 = e.target.elements[1].value;
    console.log(address1);
    var address2 = e.target.elements[2].value;
    var city = e.target.elements[3].value;
    var state = e.target.elements[4].value;
    var zip = e.target.elements[5].value;
    var country = e.target.elements[6].value;
    var description = e.target.elements[7].value;
    var gradingFormat = e.target.elements[8].value;
    var eventType = e.target.elements[9].value;
    var justification = e.target.elements[10].value;
    var dateTime = e.target.elements[11].value;
    var cost = e.target.elements[12].value;

    let form = {
      employeeId:-1,
      address1:"",
      address2:"",
      city:"",
      state:"",
      zip:"",
      country:"",
      description:"",
      gradingFormat:"",
      eventType:"",
      justification:"",
      dateTime:"",
      cost:""
    }

    if(employeeId) form.employeeId = employeeId;
    if(address1) form.address1 = address1;
    if(address2) form.address2 = address2;
    if(city) form.city = city;
    if(state) form.state = state;
    if(zip) form.zip = zip;
    if(country) form.country = country;
    if(description) form.description = description;
    if(gradingFormat) form.gradingFormat = gradingFormat;
    if(eventType) form.eventType = eventType;
    if(justification) form.justification = justification;
    if(dateTime) form.dateTime = dateTime;
    if(cost) form.cost = cost;

    var result = false;

    this.http.post<Form>("http://localhost:8080/submit",form).subscribe(response => {
      result = response.verified;
      console.log(result);
      if(result){
        this.compensation = response.cost;
        this.submissionSent = true;
      }
      else{
        this.submissionFailed = true;
      }
    });
  }
}
