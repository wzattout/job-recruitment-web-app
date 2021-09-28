import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-job',
  templateUrl: './admin-add-job.component.html',
  styleUrls: ['./admin-add-job.component.css']
})
export class AdminAddJobComponent implements OnInit {

  ID!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem("loggedUser", this.ID.toString());
    this.gotoAddJob();
  }

  gotoAddJob() {
    this.router.navigate(['/addJob']);
  }

}
