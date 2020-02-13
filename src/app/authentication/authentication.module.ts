import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRouting } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRouting
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
