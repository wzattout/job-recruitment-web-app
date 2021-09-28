import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInjector } from './services/appInjector';
import { Student } from './student';

@Injectable()
export class StudentService {

  public studentsUrl: string;
   

  constructor(private http: HttpClient) {
    this.studentsUrl = 'http://localhost:8080/api/students';
    http = AppInjector.injector.get(HttpClient);

  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  public findByEmail(email: String) {
    return this.http.get<Student>(this.studentsUrl + "/byEmails/" + email);
  }
  
  public findByJobId(jobId: number) {
    return this.http.get<Student[]>(this.studentsUrl + "/byJobId/" + jobId.toString());
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentsUrl, student);
  }

  public update(student: Student) {
    return this.http.put<Student>(this.studentsUrl + "/" + localStorage.getItem("loggedUser"), student);
  }

  public accept(id: number, jobId: number) {
    return this.http.get<Student>(this.studentsUrl + "/acceptStudent/" + id.toString() + "/" + jobId.toString());
  }

  public reject(id: number, jobId: number) {
    return this.http.get<Student>(this.studentsUrl + "/rejectStudent/" + id.toString() + "/" + jobId.toString());
  }

  public apply(id: number, jobId: number) {
    return this.http.get<Student>(this.studentsUrl + "/applyJob/" + id.toString() + "/" + jobId.toString());
  }

  public delete(id: number) {
    return this.http.delete<Student>(this.studentsUrl + "/" + id.toString());
  }
}
