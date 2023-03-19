import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';

import {IUser} from 'rc-features'

@Component({
    selector: 'lib-add-user-dialog',
    templateUrl: 'add-user-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserDialogComponent {


    form = new FormGroup({
        name: new FormControl(this.data.name, {
            nonNullable: true,
            validators: Validators.required,
        }),
        age: new FormControl(this.data.age, {
            nonNullable: true,
            validators: Validators.required,
        }),
    });

    constructor(
        public dialogRef: MatDialogRef<AddUserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IUser,
    ) {
    }


    onSave() {
        if (this.form.valid) {
            this.dialogRef.close(this.form.getRawValue());
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
