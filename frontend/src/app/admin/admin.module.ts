import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

export interface Admin{
  id:number;
  name:String;
  password:String;
  email:String;
}