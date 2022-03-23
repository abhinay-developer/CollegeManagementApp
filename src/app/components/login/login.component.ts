import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(
    private studentService:StudentService,
    private fb:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.onInitCreateLoginForm();
  }

    onInitCreateLoginForm(){
      this.loginForm=this.fb.group({
        'email':['',[Validators.required]],
        'password':['',[Validators.required]]
      })
    }


  submitLoginStudent(){
     this.studentService.loginStudent().subscribe(
       (response:any)=>{
        const user=response.find((a:any)=>{
        return a.email===this.loginForm.value.email&&a.password===this.loginForm.value.password
        });
        if(user){
          alert("login success")
          sessionStorage.setItem('email',this.loginForm.value.email);
          this.router.navigate(['student-home'])
        }else{
          alert("login failed");
        }

       },
       (error:any)=>{
         console.log(error)
       }
     )
  }

}
