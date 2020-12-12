import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Currency from 'src/app/entities/Currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input('currency')
  currency: Currency;
  submitted: boolean = false;
  // the result of the currency exchange
  exchangeResult: number = 0;
  currencyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currencyForm = this.formBuilder.group({
      exchangeFrom: ['', [Validators.nullValidator]],
      exchangeTo: ['', [Validators.nullValidator]],
      sumExchange: ['', [Validators.nullValidator]]
    })
  }

  convertCurrency() {
    this.submitted = true;
    this.currencyService.changeCurrency(this.currencyForm.value).subscribe((data) => {
      this.currency = data;
      console.log(this.currencyForm.value);
      console.log(this.currency);
    });
  }

  get f() { return this.currencyForm.controls }
}
