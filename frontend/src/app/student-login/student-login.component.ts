import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

student: Student;

  constructor(private router: Router, private studentService: StudentService) { 
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.findByEmail(this.student.email).subscribe(result => {
      if(this.student.password == result.password) {
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
    this.router.navigate(['/studentHome']);
  }
}
