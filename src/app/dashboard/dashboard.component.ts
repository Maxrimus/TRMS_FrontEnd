import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PendingApplicationsComponent } from '../pending-applications/pending-applications.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  goToForm(){
    this.router.navigate(['application']);
  }

  goToPending(){
    this.router.navigate(['pending-applications']);
  }

  goToPrevious(){
    this.router.navigate(['previous-applications']);
  }

  getUser():string{
    return this.userService.getCurrentUser();
  }
}
