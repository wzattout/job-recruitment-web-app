import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

  delete(id: number): void {
    this.studentService.delete(id);
  }

  edit(id: number): void {
    localStorage.setItem("loggedUser", id.toString());
    this.router.navigate(['/editCompanyInfo']);
  }

}
