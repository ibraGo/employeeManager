import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }

export interface Employee {
  id: number;
  name : String;
  last_name: String;
  job : String;
  salary: String;
  phone: number;
}