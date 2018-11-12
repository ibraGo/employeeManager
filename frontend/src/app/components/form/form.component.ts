import { Component, OnInit } from '@angular/core';
import { Employee } from '../..//employee/employee.module'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee:any=[];

  constructor() { }

  ngOnInit() {
  }

  add(name, last_name, job, salary, phone){
    this.employee.name = name;
    this.employee.last_name = last_name;
    this.employee.job= job;
    this.employee.salary=salary;
    this.employee.phone=phone;
  }
}
