import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { Users } from 'src/app/View Model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  showPassword:boolean = false;
  form!: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^.{8,15}$";
  phone="^01[0125][0-9]{8}$"

userT!:Users
// should contain at least tow upper case
      // should contain at least one lower case
      // should contain at least one digit
 // should contain at least one Special character
            // Must be at least 8 characters to 15 


  constructor(
    private toastr:ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private authService: UserAuthService
  ) { 
    this.form = this.fb.group({
      // email:['',[Validators.required,]],
      // password:['',[Validators.required]]
      email:['',[Validators.required,Validators.pattern(this.phone)]],
      password:['',[Validators.required,Validators.pattern(this.passwordPattern)]]
    })
  }

  ngOnInit(): void {
  }


  login(): void {
    const user:Users ={
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value,
    } 
    const _user = this.authService.signIn(user)
    if(_user?.name){
      this.toastr.success('Hello, again'+_user?.name,'',{
        positionClass: 'toast-top-left'
      });
    }
  }

  togglePassword () {
    this.showPassword = !this.showPassword

}

}
