import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/_services/token-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, 
    private router: Router) { }

  ngOnInit(): void {
    /* Checks if a token is present - if a token is present, that means the user is logged in. */
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

}
