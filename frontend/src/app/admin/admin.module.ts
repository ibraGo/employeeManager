import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

export interface AdminModule{
  name:string;
  password:string;
  email:string;
}