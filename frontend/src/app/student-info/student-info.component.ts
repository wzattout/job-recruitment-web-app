import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  student: Student;

  constructor(private router: Router, 
    private studentService: StudentService) {
    this.student = new Student;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.update(this.student).subscribe(result => this.gotoCompanyHome());
  }

  gotoCompanyHome() {
    window.alert("info editted");
  }

}
