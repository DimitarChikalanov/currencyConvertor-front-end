import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
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
  { path: 'update', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
