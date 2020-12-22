import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/entities/User';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new User();
  id: number;
  updateSuccess = false;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userService.getUserProfile().subscribe((data) => {
        this.user = data;
      });
    })
  }

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
