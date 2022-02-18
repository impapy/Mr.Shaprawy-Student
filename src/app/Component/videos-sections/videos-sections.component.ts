import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeServService } from 'src/app/Services/home-serv.service';
import { SectionServService } from 'src/app/Services/sectionsvidoes/section-serv.service';
import { Vidoes } from 'src/app/View Model/vidoes';

@Component({
  selector: 'app-videos-sections',
  templateUrl: './videos-sections.component.html',
  styleUrls: ['./videos-sections.component.sass']
})
export class VideosSectionsComponent implements OnInit, OnDestroy {
  sec: string = ''
  vidSec: any
  vidSecforname: Vidoes[] = []
  imageSourc = "https://www.youtube.com/embed/"
  UrlV: string = ''
  activeState = 'Draft';
  sel:any=''
  befor!:any
  private subscriptionses: Subscription[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private vidoesSecserv: SectionServService,
    public router: Router) { }

  ngOnInit(): void {
   let getpar= this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.sec = String(paramMap.get('section'));

      })
      this.subscriptionses.push(getpar);
  let getvlimnam=  this.vidoesSecserv.GetAllVidoesSection(this.sec).subscribe(V => {
      this.vidSecforname = V
     
    })
    this.subscriptionses.push(getvlimnam);

  let getvlim=  this.vidoesSecserv.TestGetAllVidoesSection(this.sec,this.sel).subscribe(NV=>{
this.befor=NV
this.vidSec=this.befor[0]

       this.UrlV = this.imageSourc + this.vidSec?.source
      this.activeState = this.vidSec.name

    })
    this.subscriptionses.push(getvlim);

  }
  setStateAsActive(state: any) {
    this.activeState = state;
  }
  getvidoesid(vid: any) {
    

  let getonev=  this.vidoesSecserv.TestGetAllVidoesSection(this.sec,vid).subscribe(NV=>{
      this.vidSec=NV
      this.UrlV = this.imageSourc + this.vidSec?.source

    })   
    this.subscriptionses.push(getonev);

  }

  gototest(id: any) {

    this.router.navigate(['/test/' + id])
  }
  gotoHW(id: any) {

    this.router.navigate(['/HomeWork/' + id])
  }

  ngOnDestroy() {
    for (let sub of this.subscriptionses)
      sub.unsubscribe();
  }
}
