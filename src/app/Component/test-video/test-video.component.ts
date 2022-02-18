import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { SectionServService } from 'src/app/Services/sectionsvidoes/section-serv.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { MonthExamService } from 'src/app/Services/monthExServec/month-exam.service';
@Component({
  selector: 'app-test-video',
  templateUrl: './test-video.component.html',
  styleUrls: ['./test-video.component.sass']
})
export class TestVideoComponent implements OnInit {
  logstatuse!: boolean
  idv: any
  testvedios: any
  answer:any[]=[]
indexQ:number=0
ististed:boolean=false
Test:any

countDown!: Subscription;
counter = 900;
tick = 1000;
  constructor(private activatedRoute: ActivatedRoute, public router: Router, private authService: UserAuthService,
    private toastr: ToastrService, private vidoesSecserv: SectionServService,private MonthEx:MonthExamService ) {
  }

  ngOnInit(): void {

    this.countDown = this.MonthEx.getCounter(this.tick).subscribe(() => {
      this.counter--;
      // console.log(this.counter);

      if (this.counter == 0) {
        this.router.navigate(['/'])
      }
    });



    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.idv = String(paramMap.get('id'));
        
      })
    this.vidoesSecserv.GetVidoetestbyid(this.idv).subscribe(T => {
      this.testvedios = T.test
    
    })

    
    this.authService.checktestvidio(this.idv).subscribe(C=>{
     this.ististed=C
    })

    this.authService.gettestuser(this.idv).subscribe(TE=>{
      this.Test=TE[0]
      console.log(this.Test)
     })
  }

  
  

  
  onRadioChange(ans: any,qus:any) {
    let t=true
   if(this.answer.length===0){
    this.answer.push({question:qus,result:ans})
    }else{
      this.answer.forEach(e=>{
          if(e.question==qus){
            this.answer.splice(this.answer.findIndex(e=>e.question===qus),1)
            this.answer.push({question:qus,result:ans})
            t=false
          }
        })
        if(t){
          this.answer.push({question:qus,result:ans})
        }
    }
 
 }

 submit(){
this.vidoesSecserv.addreportusertestvideos(this.idv, this.answer).subscribe(D=>{


  this.authService.checktestvidio(this.idv).subscribe(C=>{
    this.ististed=C
   })
  
   this.authService.gettestuser(this.idv).subscribe(TE=>{
     this.Test=TE[0]
     console.log(this.Test)
    })
},err => {
  this.toastr.error(`${err.error}`)
})





}

retrayagan(){
  this.ististed=false
}
}
