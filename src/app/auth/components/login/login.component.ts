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
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user: any = {};
  submitted: boolean = false;

  get f() { return this.loginForm.controls }

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginUser() {
    this.user = this.loginForm.value;
    this.submitted = true;
    this.authService.login(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.submitted = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.redirectHomeAfterLogin();
      },
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