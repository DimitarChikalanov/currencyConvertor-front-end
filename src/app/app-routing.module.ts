/* Modules. */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/_services/auth-guard.service';

/* Components. */
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AddNewCurrencyComponent } from './components/admin-components/add-new-currency/add-new-currency.component';
import { AdminBoardComponent } from './components/admin-components/admin-board/admin-board.component';
import { DeleteCurrencyComponent } from './components/admin-components/delete-currency/delete-currency.component';
import { UpdateUserComponent } from './components/user-components/update-user/update-user.component';
import { UserProfileComponent } from './components/user-components/user-profile/user-profile.component';
import { LandingComponent } from './pages/landing/landing.component';

/**
 * Holds all routes routes for the application.
 */
const routes: Routes = [
  /* Default route. Currently redirects to home. */
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  /* Route for the home page. (LandingComponent) */
  { path: 'home', component: LandingComponent },

  /* Route for register page. (RegisterComponent) */
  { path: 'register', component: RegisterComponent },

  /* Route for login page (Login Component) */
  { path: 'login', component: LoginComponent },

  /* Route for user profile page (UserProfile Component) */
  { path: 'profile', component: UserProfileComponent },

  /* Route for user profile page (UserProfile Component) */
  { path: 'update', component: UpdateUserComponent },
  
  /* Route for admin board page (AdminBoard Component) */
  { path: 'admin-board', component: AdminBoardComponent },

  /* Route for add new currency page (AddNewCurrencyComponent) */
  { path: 'new-currency', component: AddNewCurrencyComponent },

  /* Route for delete currency page (DeleteCurrencyComponent) */
  { path: 'delete-currency', component: DeleteCurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
