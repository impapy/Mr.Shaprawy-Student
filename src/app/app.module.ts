import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { LoginComponent } from './Component/user/login/login.component';
import { SignupComponent } from './Component/user/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideosSectionsComponent } from './Component/videos-sections/videos-sections.component';
import { SafePipe } from './pipes/safe.pipe';
import { TestVideoComponent } from './Component/test-video/test-video.component';
import { AuthInterceptorProvider } from './auth.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeWorkVideosComponent } from './Component/home-work-videos/home-work-videos.component';
import { SolutionVidoesComponent } from './Component/solution-vidoes/solution-vidoes.component';
import { MonthExamComponent } from './Component/month-exam/month-exam.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { ChoseExamComponent } from './Component/chose-exam/chose-exam.component';
import { ReportUserComponent } from './Component/report-user/report-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    VideosSectionsComponent,
    SafePipe,
    TestVideoComponent,
    NotfoundComponent,
    HomeWorkVideosComponent,
    SolutionVidoesComponent,
    MonthExamComponent,
    FormatTimePipe,
    ChoseExamComponent,
    ReportUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
