import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseUrl:string="http://localhost:3000/loginUsers";
  constructor(private http:HttpClient) {  
  
  }

   //Login API (GET)
   public loginStudent(){
    return  this.http.get(`${this.baseUrl}`);
   }
}
