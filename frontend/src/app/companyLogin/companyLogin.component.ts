import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from '../hr';
import { HRService } from '../hr.service';


@Component({
  selector: 'app-companyLogin',
  templateUrl: './companyLogin.component.html',
  styleUrls: ['./companyLogin.component.css']
})
export class CompanyLoginComponent implements OnInit {

  hr: HR;


  constructor(private router: Router, private hrService: HRService) {
    this.hr = new HR();

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hrService.findByEmail(this.hr.email).subscribe(result => {
      if(this.hr.password == result.password) {
        localStorage.setItem('loggedUser', result.id.toString());
        this.gotoHRHome();
      } else {
          window.alert("wrong email or password");
      }
    }, error => {
        console.log(error);
    });
  }

  gotoHRHome() {
    this.router.navigate(['/companyHome']);
  }
}
