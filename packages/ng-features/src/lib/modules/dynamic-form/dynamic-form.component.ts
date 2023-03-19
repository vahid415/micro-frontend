import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";

@Component({
  standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
    reactiveForm = new FormGroup({
        name: new FormControl([], {
          nonNullable: true,
          validators: Validators.required,
        }),

      });
}
