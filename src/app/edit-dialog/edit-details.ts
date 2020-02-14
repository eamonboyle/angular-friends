import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';

export enum EditType {
    NAME,
    EMAIL,
    MOBILE,
    PASSWORD
}

export class EditDetails {

    constructor(
        private authService: AuthenticationService,
        private userService: UserService
    ) {

    }

    public edit(editType: EditType, value: string) {
        switch (editType) {
            case EditType.NAME:
                this.editName(value);
                break;
            case EditType.EMAIL:
                this.editEmail(value);
                break;
            case EditType.MOBILE:
                this.editMobile(value);
                break;
            case EditType.PASSWORD:
                this.editPassword(value);
                break;
        }
    }
    editPassword(value: string) {
        const newPassword: string = value;
        this.authService.changePassword(newPassword).then(() => {
            alert('Password changed successfully');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    editMobile(value: string) {
        const user: User = this.userService.getSavedUser().getValue();
        user.mobile = value;
        this.userService.updateMobile(user, value);
        alert('Mobile changed successfully');
    }
    editEmail(value: string) {
        this.authService.changeEmail(value).then(() => {
            const user: User = this.userService.getSavedUser().getValue();
            user.email = value;
            this.userService.updateEmail(user, value);
            alert('Email changed successfully');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    editName(value: string) {
        const user: User = this.userService.getSavedUser().getValue();
        user.name = value;
        this.userService.updateName(user, value);
        alert('Name changed successfully');
    }

}