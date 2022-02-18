import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonthExamService } from 'src/app/Services/monthExServec/month-exam.service';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { Mexam } from 'src/app/View Model/mexam';

@Component({
  selector: 'app-month-exam',
  templateUrl: './month-exam.component.html',
  styleUrls: ['./month-exam.component.sass']
})

export class MonthExamComponent implements OnInit, AfterViewInit, OnDestroy {
  countDown!: Subscription;
  counter = 3600;
  tick = 1000;
  year: any
  month: any
  userName: any = '';
  theExam!: Mexam
  totalQuestin: number = 0
  totaldegree: any = 0
  oneQuestion: any
  counytest: number = 0
  answer: any[] = []
  ististed: boolean = false
  Test: any;
  checkres: any

  status:string=''
  
  constructor(private activatedRoute: ActivatedRoute, private MonthEx: MonthExamService,
    public router: Router, private userService: UserAuthService) {

     
  }

  ngOnInit(): void {

  
   
    // window.open('default.aspx', 'google', 'location=no,toolbar=0,directories=no,status=no,menubar=no,resizable=no,scrollbars=no');
    this.userService.userName$.subscribe(userName => {
      const user = JSON.parse(localStorage.getItem('user') as string);
      this.userName = user.name
    })

    this.countDown = this.MonthEx.getCounter(this.tick).subscribe(() => {
      this.counter--;
      // console.log(this.counter);

      if (this.counter == 0) {
      
        if( this.status==''){
          this.status='انتهاء الوقت قبل ان تنهيه'
          this.MonthEx.AddReportUserMonthExam(this.theExam._id, this.answer, this.status).subscribe(R => {
  
              this.ististed = true
      
          
          })
        }
      
        this.router.navigate(['/selectExam'])
      }
    });

    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.year = String(paramMap.get('year'));
        this.month = String(paramMap.get('month'));

      })

    this.MonthEx.getOneMonthExam(this.year, this.month).subscribe(E => {
      console.log(E)
      this.theExam = E
      this.oneQuestion = this.theExam?.testM[this.counytest]
      this.totalQuestin = this.theExam?.testM.length

      this.theExam?.testM.forEach(ele => this.totaldegree += ele.marke)

      this.userService.checkmonthExan(this.theExam._id).subscribe(C => {
        this.ististed = C
      })

      this.userService.getMonthExan(this.theExam._id).subscribe(TE => {
        this.Test = TE[0]

      })

    })


  }

  ngAfterViewInit() {

  }

  nextquestion= async()=> {
    this.counytest++
    this.oneQuestion = this.theExam?.testM[this.counytest]


    this.checkres = await this.answer[this.counytest]
  }

  

  privequestion = async()=> {
    this.counytest--
    this.oneQuestion = this.theExam?.testM[this.counytest]

  
    this.checkres = await this.answer[this.counytest]

  }


  submit() {
    this.status = 'Done'
    this.MonthEx.AddReportUserMonthExam(this.theExam._id, this.answer, this.status).subscribe(R => {

      this.userService.checkmonthExan(this.theExam._id).subscribe(C => {
        this.ististed = C
      })

      this.userService.getMonthExan(this.theExam._id).subscribe(TE => {
        this.Test = TE[0]

      })
    })
  }


  onRadioChange(ans: any, qus: any) {
    let t = true
    if (this.answer.length === 0) {
      this.answer.push({ question: qus, result: ans })
    } else {

      this.answer=this.answer.map(e => {
        if (e.question == qus) {
          t = false
          return {...e, result: ans};
        
        }
       
        return e;
      });

      // this.answer.forEach(e => {
      //   if (e.question == qus) {
      //     this.answer.splice(this.answer.findIndex(e => e.question === qus), 1)
      //     this.answer.push({ question: qus, result: ans })
      //     t = false
      //   }
      // })

      if (t) {
        this.answer.push({ question: qus, result: ans })
      }
    }
    console.log(this.answer,"ans")
  }



  ngOnDestroy() {
    if(!this.ististed){
      this.status='اغلقت الامتحان قبل ان تنهيه'
      this.MonthEx.AddReportUserMonthExam(this.theExam._id,this.answer,this.status).subscribe(R=>{})
    }
    this.countDown.unsubscribe()
  }

}
