import { LogoutComponent } from './components/logout/logout.component';
import { StudentHomeModule } from './modules/student-home/student-home.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path:'login',component:LoginComponent},
  {  path:'signup',component:SignupComponent },
  {  path:'logout',component:LogoutComponent},

  {  path:'student-home',loadChildren:()=>import('./modules/student-home/student-home.module').then(m=>m.StudentHomeModule)}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
