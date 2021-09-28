import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-student-applied-jobs',
  templateUrl: './student-applied-jobs.component.html',
  styleUrls: ['./student-applied-jobs.component.css']
})
export class StudentAppliedJobsComponent implements OnInit {

  jobs : Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.findByStudentId().subscribe(data => {
      this.jobs = data;
    });
  }

}
