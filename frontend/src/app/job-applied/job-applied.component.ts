import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-job-applied',
  templateUrl: './job-applied.component.html',
  styleUrls: ['./job-applied.component.css']
})
export class JobAppliedComponent implements OnInit {

  students: Student[]  =  [];
  currentJob!: number;

  constructor(private  studentService: StudentService) { }

  ngOnInit(): void {
    let t: any = (localStorage.getItem("currentJob"));
    this.currentJob = t as number;
    this.studentService.findByJobId(this.currentJob).subscribe(data => {
      this.students = data;
    });
  }

  acceptStudent(id: number) {
    let t: any = (localStorage.getItem("currentJob"));
    this.currentJob = t as number;
    this.studentService.accept(id, this.currentJob);
  }

  rejectStudent(id: number) {
    let t: any = (localStorage.getItem("currentJob"));
    this.currentJob = t as number;
    this.studentService.reject(id, this.currentJob);
  }

}
