import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoseExamComponent } from './Component/chose-exam/chose-exam.component';
import { HomeWorkVideosComponent } from './Component/home-work-videos/home-work-videos.component';
import { HomeComponent } from './Component/home/home.component';
import { MonthExamComponent } from './Component/month-exam/month-exam.component';
import { ReportUserComponent } from './Component/report-user/report-user.component';
import { SolutionVidoesComponent } from './Component/solution-vidoes/solution-vidoes.component';
import { TestVideoComponent } from './Component/test-video/test-video.component';
import { UserAuthGuard } from './Component/user/user-auth.guard';
import { VideosSectionsComponent } from './Component/videos-sections/videos-sections.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'Hschool/:section', component: VideosSectionsComponent},
  {path:'test/:id', component:TestVideoComponent,canActivate:[UserAuthGuard]},
  {path:'HomeWork/:id', component:HomeWorkVideosComponent,canActivate:[UserAuthGuard]},
  {path:'SolutionV/:id', component:SolutionVidoesComponent,canActivate:[UserAuthGuard]},
  {path:'MonthEx/:year/:month', component:MonthExamComponent,canActivate:[UserAuthGuard]},
  {path:'selectExam', component:ChoseExamComponent,canActivate:[UserAuthGuard]},
  {path:'Report', component:ReportUserComponent,canActivate:[UserAuthGuard]},
  
  {
    path: 'User',
    loadChildren: () => import('./Component/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: '404PageRoute',
    pathMatch: 'full'
  },
  {path:'404PageRoute',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
