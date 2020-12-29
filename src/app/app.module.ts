import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './theme/shared/header/header.component';
import { FooterComponent } from './theme/shared/footer/footer.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserProfileComponent } from './components/user-components/user-profile/user-profile.component';
import { UpdateUserComponent } from './components/user-components/update-user/update-user.component';
import { AdminBoardComponent } from './components/admin-components/admin-board/admin-board.component';
import { AddNewCurrencyComponent } from './components/admin-components/add-new-currency/add-new-currency.component';
import { DeleteCurrencyComponent } from './components/admin-components/delete-currency/delete-currency.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './auth/_helpers/auth.interceptor';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';

@NgModule({
  /* All components in the application. */
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UpdateUserComponent,
    AdminBoardComponent,
    AddNewCurrencyComponent,
    DeleteCurrencyComponent
  ],
  
  /* Imports different modules. 
   * Each module adds a different functionality.
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbCollapseModule,
    NgbModule,
    CommonModule,
    JwtModule
  ],
  providers: [
    authInterceptorProviders,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
