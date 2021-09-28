import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HR } from '../hr';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-hrform',
  templateUrl: './hrform.component.html',
  styleUrls: ['./hrform.component.css']
})
export class HRFormComponent {

  hr: HR;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private hrService: HRService) {
    this.hr = new HR();
  }

  ngOnInit(): void { };

  onSubmit() {
    this.hrService.save(this.hr).subscribe(result => {
      this.hr.id = result.id;
      this.gotoHRList()
    });
  }

  gotoHRList() {
    this.router.navigate(['/HR']);
  }

}
