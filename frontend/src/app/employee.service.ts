import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000';
  
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get(`${this.uri}/list`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/show/${id}`);
  }

  createEmployee(name, last_name,job,salary,phone){
    const employee = {
      name : name,
      last_name: last_name,
      job : job,
      salary: salary,
      phone: phone,
    };
    return this.http.post(`${this.uri}/create/`,employee);  
  }

  editEmployee(id, name, last_name,job,salary,phone){
    const employee = {
      employee_id :id,
      name : name,
      last_name: last_name,
      job : job,
      salary: salary,
      phone: phone,
    };
    return this.http.put(`${this.uri}/edit/`,employee);  
  }

  deleteEmplyee(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

}
