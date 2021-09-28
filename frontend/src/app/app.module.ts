import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyLoginComponent } from './companyLogin/companyLogin.component';
import { HRFormComponent } from './hrform/hrform.component';
import { JobFormComponent } from './jobform/jobform.component';
import { StudentFormComponent } from './studentform/studentform.component';
import { HRListComponent } from './hrlist/hrlist.component';
import { JobListComponent } from './joblist/joblist.component';
import { StudentListComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HRService } from './hr.service';
import { JobService } from './job.service';
import { StudentService } from './student.service';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AppInjector } from './services/appInjector';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CompanyJobsComponent } from './company-jobs/company-jobs.component';
import { JobAppliedComponent } from './job-applied/job-applied.component';
import { StudentJobsComponent } from './student-jobs/student-jobs.component';
import { StudentAppliedJobsComponent } from './student-applied-jobs/student-applied-jobs.component';
import { AdminAddJobComponent } from './admin-add-job/admin-add-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyLoginComponent,
    HRFormComponent,
    JobFormComponent,
    StudentFormComponent,
    HRListComponent,
    JobListComponent,
    StudentListComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    CompanyHomeComponent,
    StudentHomeComponent,
    AdminHomeComponent,
    CompanyInfoComponent,
    StudentInfoComponent,
    CompanyJobsComponent,
    JobAppliedComponent,
    StudentJobsComponent,
    StudentAppliedJobsComponent,
    AdminAddJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HRService, JobService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
