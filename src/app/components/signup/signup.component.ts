import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.onInitCreateSignupForm();
  }

  onInitCreateSignupForm(){
    this.signupForm=this.fb.group({
      'username':['',[Validators.required]],
      'email':['',[Validators.required]],
      'password':['',[Validators.required]],
      'mobileNumber':['',[Validators.required]],
       'address':this.fb.array([])
    })
  }

  createAddress():FormGroup{
    return this.fb.group({
      'city':['',[Validators.required]],
      'country':['',[Validators.required]],
      'pincode':['',[Validators.required]],
      'streetName':['',[Validators.required]]
    })
  }
  address(): FormArray {
    return this.signupForm.get('address') as FormArray;
  }
  addAddress(event:any){
     const selectedEvent=event.target.checked;
      if(selectedEvent){
           this.address().push(this.createAddress());
      }
      else{
        const index = this.address().controls.findIndex(x => x.value === event.target.value);
         this.address().removeAt(index);
      }
  }

}

   