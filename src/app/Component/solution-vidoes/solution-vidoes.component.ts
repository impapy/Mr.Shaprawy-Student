import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionServService } from 'src/app/Services/sectionsvidoes/section-serv.service';

@Component({
  selector: 'app-solution-vidoes',
  templateUrl: './solution-vidoes.component.html',
  styleUrls: ['./solution-vidoes.component.sass']
})
export class SolutionVidoesComponent implements OnInit {
vsol:any
UrlV: string = ''
imageSourc = "https://www.youtube.com/embed/"
vdet:any
  constructor(private activatedRoute: ActivatedRoute,
    private vidoesSecserv: SectionServService,
    public router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        this.vsol = String(paramMap.get('id'));

      })

      this.vidoesSecserv.getSolutionForHWV(this.vsol).subscribe(S=>{
this.vdet=S
        this.UrlV=this.imageSourc+S.solutionVidoe
      })
  }

}
