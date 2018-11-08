import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'list', component: ListComponent},
  { path:'show', component: ShowComponent},
  { path:'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
