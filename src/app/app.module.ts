import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import {CalendarModule} from '../../node_modules/primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PendingApplicationsComponent } from './pending-applications/pending-applications.component';
import { PreviousApplicationsComponent } from './previous-applications/previous-applications.component';
import { SupervisorLoginComponent } from './supervisor-login/supervisor-login.component';
import { BencoLoginComponent } from './benco-login/benco-login.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
      path:'',
      component: LoginFormComponent
    },
    {
      path:'',
      canActivate:[AuthGuard],
      children:[
        {
          path:"dashboard",
          component:DashboardComponent
        },
        {
          path:"application",
          component:ApplicationComponent
        },
        {
          path:"pending-applications",
          component:PendingApplicationsComponent
        },
        {
          path:"previous-applications",
          component:PreviousApplicationsComponent
        },
        {
          path:"supervisor-login",
          component:SupervisorLoginComponent
        },
        {
          path:"benco-login",
          component:BencoLoginComponent
        }
      ]
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    ApplicationComponent,
    PendingApplicationsComponent,
    PreviousApplicationsComponent,
    SupervisorLoginComponent,
    BencoLoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CalendarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
