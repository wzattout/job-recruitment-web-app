import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentFormComponent {

  student :Student; 

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private studentService: StudentService){
    this.student = new Student();
   }

   ngOnInit(): void {};
   
   onSubmit() {
    this.studentService.save(this.student).subscribe(result => this.gotoStudentList());
  }

  gotoStudentList() {
    this.router.navigate(['/students']);
  }

}
