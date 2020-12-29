import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency-service/currency.service';

@Component({
  selector: 'app-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.css']
})
export class DeleteCurrencyComponent implements OnInit {

  /* Delete currency form. */
  deleteCurrencyForm: FormGroup;

  /* Is the form submitted */
  submitted: boolean = false;

  /* Names of the currencies. */
  allCurrencyNames: String[] = [];

  /**
   * @constructor
   * 
   * @param currencyService 
   * @param formBuilder 
   */
  constructor(private currencyService: CurrencyService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    /* Form build and validations. */
    this.deleteCurrencyForm = this.formBuilder.group({
      deleteCurrencyName: ['', [Validators.required]]
    })

    /* Fills the currency names in the dropdown. */
    this.allCurrencyNames = this.getCurrencies();
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

  deleteCurrency() {

  }

}
