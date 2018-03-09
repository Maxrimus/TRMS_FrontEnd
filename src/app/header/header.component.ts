import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private login:boolean;

  constructor(private router:Router, private userService: UserService) {
    this.checkPath();
    router.events.subscribe(() => {
      this.checkPath();
   });
  }

  ngOnInit() {
  }

  checkPath(): void{
    let url = this.router.url;
    if(url == "/" || url=="/application-sent") this.login = false;
    else this.login = true;
  }

  logOut(): void{
    this.userService.setCurrentUser("");
    this.userService.setUserId(-1);
    this.router.navigate(['/']);
  }
}
