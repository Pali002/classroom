import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

   constructor(private api: AuthService){}

  ngOnInit(): void {
    this.getStudents();
  }

  title = 'classroom';

  students:any = [];
  scores:any = [];

  getStudents() {
    this.api.getStudents().subscribe({
      next: (response: any) => {
        this.students = response;
      },
      error: (err) => {
        console.log('Hiba! A RESTAPI lekérdezés sikertelen!');
      }
    });
  }

  getScores() {
    this.api.getScores().subscribe({
      next: (response: any) => {
        this.scores = response;
      },
      error: (err) => {
        console.log('Hiba! A RESTAPI lekérdezés sikertelen!');
      }
    });
  }
}
