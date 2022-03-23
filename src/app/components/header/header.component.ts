import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 user:any;
  constructor(private router:Router) {
    this.user=sessionStorage.getItem('email');
    console.log(this.user);

   }

  ngOnInit(): void {
  }
  logout(){
   this.router.navigate(['logout'])
  }

}
