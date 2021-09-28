import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HR } from '../hr';
import { HRService } from '../hr.service';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobFormComponent {

  job: Job;
  hr!: HR;
  loggedUser!: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private jobtService: JobService, hrService: HRService) {
    this.job = new Job();
    let t: any = (localStorage.getItem("loggedUser"));
    this.loggedUser = t as number;
    hrService.findByID(this.loggedUser).subscribe(result => { this.hr = result });
  }

  ngOnInit(): void { };

  onSubmit() {
    this.job.hr = this.hr;
    this.jobtService.save(this.job).subscribe(result => this.gotoJobList());
  }

  gotoJobList() {
    window.alert("job added");
  }

}
