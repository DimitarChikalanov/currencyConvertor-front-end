import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/entities/User';

import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  /* User instance. */
  user: User = new User();
  updateSuccess = false;

  /**
   * @constructor
   * 
   * @param userService 
   * @param route 
   */
  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* Loads user information from the backend. */
    this.route.params.subscribe(data => {
      this.userService.getUserProfile().subscribe((data) => {
        this.user = data;
      });
    })
  }

  /* Updates the user profile. (sends a PUT request to the backend) */
  updateUser() {
    this.userService.updateUserProfile(this.user)
      .subscribe(data => {
        this.user = data;
        this.updateSuccess = true;
      })
  }

  // After a successful update, redirect to the user profile page
  // View the updated info
  goToProfilePage(){
    window.location.reload();

    window.location.replace("home");
  }
}
