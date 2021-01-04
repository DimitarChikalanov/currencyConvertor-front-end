import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import NewCurrency from 'src/app/entities/NewCurrency';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { CurrencyService } from 'src/app/services/currency-service/currency.service';

@Component({
  selector: 'app-add-new-currency',
  templateUrl: './add-new-currency.component.html',
  styleUrls: ['./add-new-currency.component.css']
})
export class AddNewCurrencyComponent implements OnInit, OnDestroy {

  /* Registration form. */
  addNewCurrencyForm: FormGroup;

  /* New currency object to be sent. */
  newCurrency: NewCurrency;

  /* Sends requests. */
  private subscriptions = new Subscription();

  /* Is request successful. */
  isSuccessful: boolean = false;

  /* All currencies list */
  allCurrencyList: String[];
  
  /* Error message */
  errorCurrencyExist = '';

  /* */
  addCurrencyFailed = false;

  /**
   * @constructor
   * 
   * @param adminService
   * @param fb
   */
  constructor(private adminService: AdminService,
    private fb: FormBuilder,
    private currencyService: CurrencyService) { }
  
  /**
   * Get the controls of the register form.
   * 
   * @returns the controls of the registration forms.
   */
  get f() { return this.addNewCurrencyForm.controls }

  ngOnInit(): void {

    this.allCurrencyList = [];

    /* Form build and validations. */
    this.addNewCurrencyForm = this.fb.group({
      currencyName: ['', [Validators.required]],
      rate: ['', [Validators.required]]
    })

    this.allCurrencyList = this.getCurrencies();
  }

  /**
   * Sends a post request (with a new currency object.)
   * Creates a new currency.
   */
  addCurrency() {

    this.newCurrency = this.addNewCurrencyForm.value; // assign the form value to the new currency object

    /* If the currency to add already exists in the list. */
    if (this.allCurrencyList.includes(this.newCurrency.currencyName)) {
      this.errorCurrencyExist = 'Currency already exists';
      this.addCurrencyFailed = true;
      return;
    }

    /* Send the post request to the backend. */
    this.subscriptions.add(this.adminService.addNewCurrency(this.newCurrency).subscribe(data => {

      this.isSuccessful = true;
    }))

    this.redirectHomeAfterRegistration(); // redirect to home
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
        this.allCurrencyList.push(oneCurrency?.nameOfValue);
      })
    });

    return this.allCurrencyList;
  }

  // After a successful adding of currency, redirect the user to the home page
  redirectHomeAfterRegistration(){
    window.location.reload();

    window.location.replace("home");
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
