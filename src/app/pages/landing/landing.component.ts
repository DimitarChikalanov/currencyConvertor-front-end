import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/_services/token-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  /* Is the user logged in. */
  isLoggedIn = false;

  /**
   * @constructor 
   *
   * @param tokenStorageService 
   * @param router 
   */
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    /* Checks if a token is present - if a token is present, that means the user is logged in. */
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

}
