import { Component, OnInit } from '@angular/core';
import { HomeServService } from 'src/app/Services/home-serv.service';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
info:any
logstatuse!:boolean
  constructor(private authService: UserAuthService,private Homeserv:HomeServService) { 
    this.logstatuse = this.authService.isLoggedIn

  }

  ngOnInit(): void {
this.Homeserv.GetInformationAdmin().subscribe(I=>{
this.info=I
})
    
  }
  logout(){
    this.authService.Logout();
   
  }
}
