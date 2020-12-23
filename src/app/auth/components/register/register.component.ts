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
  /* Registration form. */
  registerForm: FormGroup;
  /* Is registration successful. */
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  /* Error message. */
  errorMessage = '';
  /* Min length of username and names. */
  minLength: number = 3;
   /* Max length of username and names. */
  maxLength: number = 20;
  /* User instance. */
  user: any = {};
  /* Is the form submitted. */
  submitted = false;

  /**
   * @constructor
   * 
   * @param authService - sends requests to the backend
   * @param fb - builds the form
   * @param router - redirects the user
   */
  constructor(private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router) { }

  /**
   * Get the controls of the register form.
   * 
   * @returns the controls of the registration forms.
   */
  get f() { return this.registerForm.controls }

  ngOnInit() {
    /* Form build and validations. */
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      firstName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      lastName: ['', [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
    })
  }

  /**
   * Registers the user.
   */
  registerUser() {
    this.user = this.registerForm.value; // takes the value of the form
    /* Sends a POST request to the backend. */
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.redirectHomeAfterRegistration(); // redirects to the home page
      },
      /* If any errors. */
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