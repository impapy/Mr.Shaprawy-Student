import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeServService } from 'src/app/Services/home-serv.service';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { Vidoes } from 'src/app/View Model/vidoes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
vidoes:Vidoes[]=[];
userimage:any
imgurl = environment.APIURL
  constructor(private vidoesserv:HomeServService,private userserv:UserAuthService) { }

  ngOnInit(): void {

    let subscription: Subscription = this.vidoesserv.GetAllVidoes().subscribe(V => {
      this.vidoes = V
  })

this.userserv.getvravstudent().subscribe(Uimg=>{
this.userimage=Uimg
})


//   var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو","يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];


// var date = new Date();

// console.log("The current month is " + months[date.getMonth()]);

  }

 
}

