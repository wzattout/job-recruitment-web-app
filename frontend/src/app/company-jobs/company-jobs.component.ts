import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-company-jobs',
  templateUrl: './company-jobs.component.html',
  styleUrls: ['./company-jobs.component.css']
})
export class CompanyJobsComponent implements OnInit {

  jobs: Job[] =[];

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.findByHrId().subscribe(data => {
      this.jobs = data;
    });
  }

  viewApplied(jobId: number) {
    localStorage.setItem("currentJob", jobId.toString());
    this.router.navigate(['/jobAppliedStudents'])
  }

}
