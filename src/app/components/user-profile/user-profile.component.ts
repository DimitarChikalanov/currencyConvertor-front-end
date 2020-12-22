import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/entities/User';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/_services/token-storage.service';
import { AuthService } from 'src/app/auth/_services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  user: User;
  roles = [];

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.subscriptions.add(this.userService.getUserProfile().subscribe(data => {
      this.user = data;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
