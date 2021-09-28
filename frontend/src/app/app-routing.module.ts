import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HRFormComponent } from './hrform/hrform.component';
import { HRListComponent } from './hrlist/hrlist.component';
import { JobFormComponent } from './jobform/jobform.component';
import { JobListComponent } from './joblist/joblist.component';
import { CompanyLoginComponent } from './companyLogin/companyLogin.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentFormComponent } from './studentform/studentform.component';
import { StudentListComponent } from './studentlist/studentlist.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CompanyJobsComponent } from './company-jobs/company-jobs.component';
import { JobAppliedComponent } from './job-applied/job-applied.component';
import { StudentJobsComponent } from './student-jobs/student-jobs.component';
import { StudentAppliedJobsComponent } from './student-applied-jobs/student-applied-jobs.component';
import { AdminAddJobComponent } from './admin-add-job/admin-add-job.component';

const routes: Route [] = [
  { path: '', component: HomeComponent },
  { path: 'adminAddJob', component: AdminAddJobComponent},
  { path: 'addJob', component: JobFormComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'companies', component: HRListComponent },
  { path: 'companyHome', component: CompanyHomeComponent },
  { path: 'companyJobs', component: CompanyJobsComponent },
  { path: 'companyLogin', component: CompanyLoginComponent },
  { path: 'companyRegister', component: HRFormComponent },
  { path: 'editCompanyInfo', component: CompanyInfoComponent },
  { path: 'editstudentInfo', component: StudentInfoComponent },
  { path: 'jobAppliedStudents', component: JobAppliedComponent},
  { path: 'jobs', component: JobListComponent },
  { path: 'studentAppliedJobs', component: StudentAppliedJobsComponent },
  { path: 'studentHome', component: StudentHomeComponent },
  { path: 'studentJobs', component: StudentJobsComponent },
  { path: 'studentLogin', component: StudentLoginComponent },
  { path: 'studentRegister', component: StudentFormComponent },
  { path: 'students', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
