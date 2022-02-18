import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonthExamService } from 'src/app/Services/monthExServec/month-exam.service';
import { Mexam } from 'src/app/View Model/mexam';

@Component({
  selector: 'app-chose-exam',
  templateUrl: './chose-exam.component.html',
  styleUrls: ['./chose-exam.component.sass']
})
export class ChoseExamComponent implements OnInit {
allMex:Mexam[]=[]
monthforyear:any=''
selyear:any=''
selmonth:any=''
  constructor(private Mexam:MonthExamService, public router: Router) { }

  ngOnInit(): void {

    this.Mexam.getallMonthExam().subscribe(Mex=>{
      this.allMex=Mex
     
    })

  }

  getyear(yeear:any){
  this.selyear=yeear.target.value
  this.monthforyear= this.allMex.filter(M=>M.years==this.selyear)
 
 

}

getmonth(month:any){
  this.selmonth=month.target.value
 
}

Go(){
  // this.Mexam.addData( this.selyear,this.selmonth)
  //    var params = [
  //     'height='+screen.height,
  //     'width='+screen.width,
  //     'fullscreen=yes' // only works in IE, but here for completeness
  // ].join(',');
  // var popup = window.open('/MonthEx/'+this.selyear+'/'+this.selmonth, 'popup_window', params)

  this.router.navigate(['/MonthEx/' + this.selyear+'/'+this.selmonth])
}

}
