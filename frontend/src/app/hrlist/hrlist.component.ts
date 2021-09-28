import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from '../hr';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-hrlist',
  templateUrl: './hrlist.component.html',
  styleUrls: ['./hrlist.component.css']
})
export class HRListComponent implements OnInit {

  hr: HR[] = [];

  constructor(private hrService: HRService, private router: Router) { }

  ngOnInit(): void {
    this.hrService.findAll().subscribe(data => {
      this.hr = data;
    });
  }

  delete(id: number): void {
    this.hrService.delete(id);
  }

  edit(id: number): void {
    localStorage.setItem("loggedUser", id.toString());
    this.router.navigate(['/editCompanyInfo']);
  }

}
