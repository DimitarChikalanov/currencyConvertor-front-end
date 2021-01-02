import { Component, OnDestroy, OnInit } from '@angular/core';

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
  constructor() { }

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
