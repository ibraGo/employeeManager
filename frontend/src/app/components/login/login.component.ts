import { Component, OnInit } from '@angular/core';
import { Admin } from '../../admin/admin.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:any=[];

  constructor() { }

  ngOnInit() {
  }

  login(name, password){
    this.admin.name = name;
    this.admin.password = password;
  }

}
