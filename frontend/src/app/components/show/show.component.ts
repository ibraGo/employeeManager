import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {Employee} from '../../employee/employee.module';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id:String;
  employee:any = [];
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employee.id =params.id;
      this.employee.job = "bugger";
      this.employee.last_name= "khachani";
      this.employee.name= "hmed";
      this.employee.phone= "06157228119";
      this.employee.salary=12030;
    });
  }

}
