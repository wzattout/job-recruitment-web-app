import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-jobs',
  templateUrl: './student-jobs.component.html',
  styleUrls: ['./student-jobs.component.css']
})
export class StudentJobsComponent implements OnInit {

  jobs : Job[] = [];
  loggedUser!: number;

  constructor(private jobService: JobService,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.jobService.findAll().subscribe(data => {
      this.jobs = data;
    });
  }

  apply(jobId: number): void {
    let t: any = (localStorage.getItem("loggedUser"));
    this.loggedUser = t as number;
    this.studentService.apply(this.loggedUser, jobId);
  }

}
