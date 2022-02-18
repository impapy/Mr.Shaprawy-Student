import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { Users } from 'src/app/View Model/users';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  files: any[] = []

  selectedstage:any='first'
  showPassword:boolean = false;
  form!: FormGroup;
  fullname="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
  phone="^01[0125][0-9]{8}$"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // passwordPattern = "";
  passwordPattern = "^.{8,15}$";
userT!:Users
  constructor(
    private toastr:ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private authService: UserAuthService
  ) {
    this.form = this.fb.group({
     
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required,Validators.pattern(this.passwordPattern)]],
      name:['',[Validators.required,Validators.pattern(this.fullname)]],
      phone:['',[Validators.required,Validators.pattern(this.phone)]],
      files:['',[Validators.required,Validators.pattern('')]]
    })
   }

  ngOnInit(): void {
   
  }
  onChange(e:any){
    this.selectedstage=e.target.value
  }
  signup(): void {
    const user:any ={
      name:this.form.controls['name'].value,
      email:this.form.controls['email'].value,
      phone:this.form.controls['phone'].value,
      password:this.form.controls['password'].value,
       yearstude:this.selectedstage
    }
    const uploadData = new FormData();

  
    for (let i = 0; i < this.files.length; i++) {
      uploadData.append('files', this.files[i]);
    }
    for (let key in user) {
      uploadData.append(key, user[key]);
    }

    this.authService.signup(uploadData).subscribe(data => {
      this.toastr.success(`${user.name}, Your're Signup Successfully..`);
      this.router.navigate(['/User/login'])
    },(err)=>{
      this.toastr.error(err);

    })
  }

  togglePassword () {
    this.showPassword = !this.showPassword}

    get f(){
      return this.form.controls;
    }


    onInputChange(e: any) {
      this.files = e.target.files
  
    }

}
