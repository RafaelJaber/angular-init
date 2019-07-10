import { Component, OnInit, Input } from '@angular/core';
import {StudentModel} from './student.model';


@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: StudentModel;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log(`Student: ${this.student.name}`);
  }

}
