import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import CurrencyExchange from 'src/app/entities/CurrencyExchange';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input('currency')
  currency: CurrencyExchange;
  submitted: boolean = false;
  // the result of the currency exchange
  exchangeResult: number = 0;
  currencyForm: FormGroup;
  allCurrencyNames: String[] = [];

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currencyForm = this.formBuilder.group({
      exchangeFrom: ['', [Validators.nullValidator]],
      exchangeTo: ['', [Validators.nullValidator]],
      sumExchange: ['', [Validators.nullValidator]]
    })

    this.allCurrencyNames = this.getCurrencies();
  }

  convertCurrency() {
    this.submitted = true;
    this.currencyService.changeCurrency(this.currencyForm.value).subscribe((data) => {
      this.currency = data;
      console.log(this.currencyForm.value);
      console.log(this.currency);
    });
  }

  // subscribe to the data from the GET request
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
