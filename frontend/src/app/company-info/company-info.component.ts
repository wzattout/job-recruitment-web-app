import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HR } from '../hr';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  hr: HR;

  constructor(private router: Router, 
      private hrService: HRService) { 
        this.hr = new HR();
      }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hrService.update(this.hr).subscribe(result => this.gotoCompanyHome());
  }

  gotoCompanyHome() {
    window.alert("info editted");
  }
}
