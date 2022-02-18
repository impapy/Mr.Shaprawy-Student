import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { Users } from 'src/app/View Model/users';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.sass']
})
export class ReportUserComponent implements OnInit {
alluserdata!:Users
tests:any[]=[]
exam:any[]=[]
HW:any[]=[]
  constructor( private userService:UserAuthService) { }

  ngOnInit(): void {

    this.userService.getUserReport().subscribe(R=>{
      this.alluserdata=R
      this.tests=R.reportVideosTest
      this.exam=R.monthExame
      this.HW=R.reportHW
    })
  }

}
