import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/_services/token-storage.service';
import User from 'src/app/entities/User';

/**
 * This Component represents the header of the application.
 * It is rendered in all pages of the application.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = false;
  /* List of roles. */
  private roles: string[];
  /* Is the user logged in or not. */
  isLoggedIn = false;
  /* If the user is admin, show admin board. */
  showAdminBoard = false;
  /* If the user is moderator, show moderator board. */
  showModeratorBoard = false;
  username: string;

  /* User instance. */
  user: User;

  /**
   * @constructor
   * 
   * @param tokenStorageService - token functionality 
   */
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    /* Is the user logged in? */
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    /* If the user is logged in, then -> */
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser(); // assigns user
      this.roles = user.roles; // assigns user roles

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN'); // if the user is admin
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR'); // if the user is moderator

      this.username = user.username;
    }
  }

  /**
   * Logs out the user which is currently logged in.
   * Reloads the page.
   */
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();

    window.location.replace("home");
  }

}
