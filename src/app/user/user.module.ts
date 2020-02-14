import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { FriendsDatePipe } from '../pipes/friends-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    UserProfileComponent,
    EditDialogComponent,
    UserFriendsComponent,
    FriendsDatePipe,
  ]
})
export class UserModule { }
