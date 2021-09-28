import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JobListComponent implements OnInit {

  jobs : Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.findAll().subscribe(data => {
      this.jobs = data;
    });
  }

  delete(jobId: number): void {
    this.jobService.delete(jobId);
  }

}
