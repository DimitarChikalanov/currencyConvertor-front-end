import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* Login Form to be filled in. */
  loginForm: FormGroup;
  /* Is the user logged in. */
  isLoggedIn = false;
  /* User login failed. */
  isLoginFailed = false;
  /* Erros message. */
  errorMessage = '';
  /* User roles. */
  roles: string[] = [];
  /* User instance. */
  user: any = {};
  /* Is the form submitted. */
  submitted: boolean = false;

  /**
   * Get the controls of the login form.
   * 
   * @returns the controls of the login form
   */
  get f() { return this.loginForm.controls }

  /**
   * @constructor
   * 
   * @param authService 
   * @param tokenStorage 
   * @param fb 
   * @param router 
   */
  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    /* If the user is logged in. */
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles; // assign roles
    } 

    /* Login form validations. (only required currently) */
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Logins the user using JWT services.
   */
  loginUser() {
    this.user = this.loginForm.value; // takes the value of the login form
    this.submitted = true;
    /* Sends a request to the backend. (with the user) */
    this.authService.login(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token); // saves the user token
        this.tokenStorage.saveUser(data); // saves the user

        this.isLoginFailed = false;
        this.submitted = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles; // receives roles
        this.redirectHomeAfterLogin(); // redirects to home page
      },
      /* If any errors occur -> */
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // After a successful login, redirect the user to the home page
  redirectHomeAfterLogin(){
    window.location.reload();

    window.location.replace("home");
  }
}