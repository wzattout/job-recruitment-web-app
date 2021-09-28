import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username!: String;
  password!: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.username == "admin" && this.password == "wzattout") {
      this.gotoAdminHome();
    } else {
      window.alert("wrong username or password");
    }
  }

  gotoAdminHome() {
    this.router.navigate(['/adminHome']);
  }
}
