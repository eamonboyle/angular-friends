import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { FriendsService } from '../services/friends.service';
import { CommonUtilsModule } from '../utils/common-utils.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    CommonUtilsModule
  ],
  declarations: [
    UserProfileComponent,
    EditDialogComponent,
    UserFriendsComponent,
  ],
  providers: [
    FriendsService
  ]
})
export class UserModule { }
