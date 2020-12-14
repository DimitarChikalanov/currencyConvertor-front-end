import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import CurrencyExchange from 'src/app/entities/CurrencyExchange';
import { CurrencyService } from 'src/app/services/currency.service';

/**
 *  Currency Component. 
 *  Implements the business logic for currency and currency exchange.
 */
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  /* Represents the child component. */
  @Input('currency')
  currency: CurrencyExchange;
  /* Is the form submitted or not. */
  submitted: boolean = false;
  /* Result of the currency exchange. */
  exchangeResult: number = 0;
  /* Currency exchange form. */
  currencyForm: FormGroup;
  /* Names of the currencies. */
  allCurrencyNames: String[] = [];

  /**
   *  @constructor
   *  Creates an instance of the currency component.
   *  Uses dependecy injection.
   *  @param formBuilder
   *  @param currencyService
   *  @param router
   */
  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currencyForm = this.formBuilder.group({
      exchangeFrom: ['', [Validators.nullValidator]],
      exchangeTo: ['', [Validators.nullValidator]],
      sumExchange: ['', [Validators.nullValidator]]
    })

    this.allCurrencyNames = this.getCurrencies();
  }

  /**
   *  This method takes the values of the fields of the currency form. 
   *  Calls the changeCurrency() method which sends a POST request with the values form the form.
   *  Then takes the returned exchange result and records it in the currency variable.
   */
  convertCurrency() {
    // the form is submitted
    this.submitted = true;
    this.currencyService.changeCurrency(this.currencyForm.value).subscribe((data) => {
      this.currency = data;
      console.log(this.currencyForm.value);
      console.log(this.currency);
    });
  }

  /**
   *  This method subscribes to the result of the GET request (getAllCurrencies),
   *  Takes the data which is returned as a response.
   *  Takes all the names of the currencies and records them in allCurrencyNames.
   * 
   *  @return allCurrencyNames - the array of names which is now filled with names
   */
  getCurrencies(): String[] {
    this.currencyService.getAllCurrencies().subscribe((data) => {
      // keep all currency names, for example ["BGN", "EUR"] etc.
      data.forEach((oneCurrency) => {
        this.allCurrencyNames.push(oneCurrency?.nameOfValue);
      })
    });

    return this.allCurrencyNames;
  }

  get f() { return this.currencyForm.controls }
}
