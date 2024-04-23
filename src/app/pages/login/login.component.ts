import { Component,  } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import{MovieServiceService} from "@app/services/movie-service.service";
import {Router} from'@angular/router'
import {ToastrService} from "ngx-toastr";
import { PageLoaderComponent } from '@app/components/page-loader/page-loader.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, PageLoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
  isLoading = false
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: MovieServiceService, private router:Router, private toaster: ToastrService ) {}
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password']
  }
  loginUser(){
   this.isLoading = true
   const{ email,password} = this.loginForm.value;
    setTimeout(()=>{
      this.isLoading = false
    }, 50000)
   this.authService.getUserByEmail(email as string).subscribe(
     response =>{
       if (response.length > 0 && response[0].password === password){
         sessionStorage.setItem('email', email as string)

           this.toaster.success('welcome back!', ' login successfully');
         this.router.navigate(['./home']);
       }else{
         setTimeout(()=>{
           this.isLoading = false
         }, 2000)
         this.toaster.error('email or password invalid', ' Sorry');
       }
     },
     error => {
       console.error("email or password is wrong")
     }
   )
  }
}
