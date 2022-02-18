import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionServService } from 'src/app/Services/sectionsvidoes/section-serv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-work-videos',
  templateUrl: './home-work-videos.component.html',
  styleUrls: ['./home-work-videos.component.sass']
})
export class HomeWorkVideosComponent implements OnInit {
  HWID: any
  HWIM: any
  imagearray: any
  imgurl = environment.APIURL
  issolution: boolean = true
  constructor(private activatedRoute: ActivatedRoute,
    private vidoesSecserv: SectionServService,
    public router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.HWID = String(paramMap.get('id'));

      })

    this.vidoesSecserv.getHWV(this.HWID).subscribe(H => {
      this.HWIM = H
      this.imagearray = H.imageHomework
      console.log( this.imagearray.length)
      if( H.solutionVidoe===''){
        this.issolution=false
      }else{
        this.issolution=true
      }
    })

   
  }
  gotosolution(){
    this.router.navigate(['/SolutionV/' +  this.HWIM._id])
  }
}
