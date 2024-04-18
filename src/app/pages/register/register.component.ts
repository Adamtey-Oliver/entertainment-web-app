import {Component, ViewEncapsulation} from "@angular/core";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {passwordMatchValidator} from "@app/shared/password-match";
import {MovieServiceService} from "@app/services/movie-service.service";
import {Auth} from "@app/interface/auth";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  },
    {
      validators: passwordMatchValidator
    }
    );
  constructor(private fb: FormBuilder, private authService: MovieServiceService, private router : Router, private toaster : ToastrService) {}

  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get repeatPassword() {
    return this.registerForm.controls['repeatPassword'];
  }
  submitDetails(){
    const postData = {...this.registerForm.value};
    delete postData.repeatPassword
    this.authService.registerUser(postData as Auth).subscribe(
      response =>{
        this.toaster.success('now login!', ' Account created successfully');
        this.router.navigate(['./login']).then(r => {
          console.log(response)} );
      },
      error => {
        this.toaster.error('', ' Error');
      }
    )
  };
}

