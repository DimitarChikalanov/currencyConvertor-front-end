import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import NewCurrency from 'src/app/entities/NewCurrency';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit, OnDestroy {

  /**
   * @constructor
   * 
   * @param router
   */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // After a successful adding of currency, redirect the user to the home page
  redirectHomeAfterRegistration(){
    window.location.reload();

    window.location.replace("home");
  }

  ngOnDestroy(): void {

  }
}
