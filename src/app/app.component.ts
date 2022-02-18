import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'student-users';
  headerFooter:any
 
  constructor(public router: Router) { }
  
  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          let arr=event.url.split('/')
          if(event.url=='/404PageRoute'){
            this.headerFooter = (event.url !== '/404PageRoute')
          }
          else if(event.url=='/User/login'){
            this.headerFooter = (event.url !== '/User/login')
          }
          else if(event.url=='/User/signup'){
            this.headerFooter = (event.url !== '/User/signup')
          }
          else if(arr[1]=='MonthEx'){
            this.headerFooter = (arr[1] !== 'MonthEx')
          }
          else{
            this.headerFooter = true
          }
        }
      });
  }
}
