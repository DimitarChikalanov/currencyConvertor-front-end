import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN } from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage = '';
  minLength: number = 3;
  maxLength:number = 20;
  user: any = {};
  submitted = false;

  constructor(private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router) { }

  get f() { return this.registerForm.controls }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      firstName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      lastName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
    })
  }

  registerUser() {
    this.user = this.registerForm.value;
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.redirectHomeAfterRegistration();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  // After a successful registration, redirect the user to the home page
  redirectHomeAfterRegistration(){
    this.router.navigate(['/login']);
  }
}