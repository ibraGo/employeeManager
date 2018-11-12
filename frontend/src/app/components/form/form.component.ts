import { Component, OnInit } from '@angular/core';
import { Employee } from '../..//employee/employee.module'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee:Employee;

  constructor() { }

  ngOnInit() {
  }

  add(name, last_name, ){
    this.employee.name = name;
    this.employee.last_name = last_name;
  }
}
