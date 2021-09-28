import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable()
export class JobService {

  private jobsUrl: string;

  constructor(private http: HttpClient) { 
    this.jobsUrl = 'http://localhost:8080/api/jobs';
  }

  public findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  public findByHrId(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl + "/byHrId/" + localStorage.getItem("loggedUser"));
  }

  public findByStudentId(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl + "/byStudentId/" + localStorage.getItem("loggedUser"));
  }

  public save(job: Job) {
    return this.http.post<Job>(this.jobsUrl, job);
  }

  public delete(jobId: number) {
    return this.http.delete<Job>(this.jobsUrl + "/" + jobId.toString());
  }
}
