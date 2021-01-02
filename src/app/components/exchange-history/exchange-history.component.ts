import { Component, Input, OnInit } from '@angular/core';
import { ExchangeHistoryService } from 'src/app/services/currency-service/exchange-history.service';
import ExchangeHistory from 'src/app/entities/ExchangeHistory';

@Component({
  selector: 'app-exchange-history',
  templateUrl: './exchange-history.component.html',
  styleUrls: ['./exchange-history.component.css']
})
export class ExchangeHistoryComponent implements OnInit {

  /* Represents the child component */
  @Input('historydetails')
  exchangeHistory: ExchangeHistory;

  /* Holds the history */
  historyList: ExchangeHistory[];

  constructor(private exchangeHistoryService: ExchangeHistoryService) { }

  ngOnInit(): void {
    /* Initiate the history list. */
    this.historyList = [];

    /* Fill in the history list. */
    this.getHistory();
  }

   /**
   *  This method subscribes to the result of the GET request (getAllHistory),
   *  Takes the data which is returned as a response.
   *  Takes all the conversion history of the current user.
   * 
   *  @return historyList - the array of conversions in history
   */
  getHistory(): ExchangeHistory[] {

    this.exchangeHistoryService.getAllHistory().subscribe(data => {
      data.forEach((currentHistory) => {
        this.historyList.push(currentHistory);
      })
    });

    return this.historyList;
  }

}
