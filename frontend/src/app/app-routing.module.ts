import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'', component: ListComponent},
  { path:'list', component: ListComponent},
  { path:'show/:id', component: ShowComponent},
  { path:'edit/:id', component: FormComponent},
  { path:'create', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
