import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  { path: 'app-about', component: AboutComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }