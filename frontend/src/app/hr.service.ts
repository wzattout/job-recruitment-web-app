import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HR } from './hr';

@Injectable()
export class HRService {

  private hrUrl: string;

  constructor(private http: HttpClient) {
    this.hrUrl = 'http://localhost:8080/api/HR';
  }

  public findAll(): Observable<HR[]> {
    return this.http.get<HR[]>(this.hrUrl);
  }

  public findByID(id: number) {
    return this.http.get<HR>(this.hrUrl + "/" + id);
  }

  public findByEmail(email: String) {
    return this.http.get<HR>(this.hrUrl + "/byEmails/" + email);
  }

  public save(hr: HR) {
    return this.http.post<HR>(this.hrUrl, hr);
  }

  public update(hr: HR) {
    return this.http.put<HR>(this.hrUrl, hr);
  }

  public delete(id: number) {
    return this.http.delete<HR>(this.hrUrl + "/" + id.toString());
  }
}
