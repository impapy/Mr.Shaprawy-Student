import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/View Model/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
//////////////////////////////////
showname:boolean=false
showemail:boolean=false
showpassword:boolean=false
showphone:boolean=false
showimage:boolean=false
showyear:boolean=false

/////////////////////////////
datauser!:any

  files: any[] = []
  showPassword:boolean = false;
  selectedstage:any=''
  form!: FormGroup;
  fullname="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
  phone="^01[0125][0-9]{8}$"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // passwordPattern = "";
  passwordPattern = "^.{8,15}$";
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
    this.authService.getuserdetails().subscribe(UD=>{
this.datauser=UD
// console.log(UD)
    })
  }

  onChange(e:any){
    this.selectedstage=e.target.value
  }
  onInputChange(e: any) {
    this.files = e.target.files

  }



  togglePassword () {
    this.showPassword = !this.showPassword}

    get f(){
      return this.form.controls;
    }



/////////////////////togels////////////////////

Fshowname(){
  this.showname=true
  this.showemail=false
  this.showpassword=false
  this.showphone=false
  this.showimage=false
  this.showyear=false
}

Fshowemail(){
  this.showname=false
  this.showemail=true
  this.showpassword=false
  this.showphone=false
  this.showimage=false
  this.showyear=false
}

Fshowphone(){
  this.showname=false
  this.showemail=false
  this.showpassword=false
  this.showphone=true
  this.showimage=false
  this.showyear=false
}

Fshowpass(){
  this.showname=false
  this.showemail=false
  this.showpassword=true
  this.showphone=false
  this.showimage=false
  this.showyear=false
}

Fshowimage(){
  this.showname=false
  this.showemail=false
  this.showpassword=false
  this.showphone=false
  this.showimage=true
  this.showyear=false
}
Fshowyear(){
  this.showname=false
  this.showemail=false
  this.showpassword=false
  this.showphone=false
  this.showimage=false
  this.showyear=true
}


Canslename(){
  this.showname=false
  
}
Cansleemail(){
  this.showemail=false
}
Canslepass(){
  this.showpassword=false
}
Canslephone(){
  this.showphone=false
}
Cansleimage(){
  this.showimage=false
}
Cansleyear(){
  this.showyear=false
}



editname(name:any){
  this.authService.editname(name).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`${name}, edite Successfully..`);
  })

  this.showname=false
}


editemail(email:any){
  this.authService.editemail(email).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`${email}, edite Successfully..`);
  })

  this.showemail=false
}

editphon(phone:any){
  this.authService.editphone(phone).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`${phone}, edite Successfully..`);
  })

  this.showphone=false
}

edityear(){
  this.authService.edityear(this.selectedstage).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`${this.selectedstage}, edite Successfully..`);
  })

  this.showyear=false
}


editpass(pass:any){
  this.authService.editpass(pass).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`password edite Successfully..`);
  })

  this.showpassword=false
}

editimage()
{
  const uploadData = new FormData();

  
  for (let i = 0; i < this.files.length; i++) {
    uploadData.append('files', this.files[i]);
  }

  this.authService.editimage(uploadData).subscribe(D=>{

    this.authService.getuserdetails().subscribe(UD=>{
      this.datauser=UD
          })
    this.toastr.success(`image edite Successfully..`);
  })

  this.showimage=false
}

}





