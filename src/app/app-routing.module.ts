import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

/**
 * Holds all routes routes for the application.
 */
const routes: Routes = [
  /* Default route. Currently redirects to home. */
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  /* Route for the home page. (LandingComponent) */
  { path: 'home', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
