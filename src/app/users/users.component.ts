import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface UserForm extends FormGroup<
{
  username: FormControl<string>,
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  age: FormControl<number>
}>{} // Curly braces here?

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  // form!: FormGroup<{ 
  //   username: FormControl<string>,
  //   firstName: FormControl<string>,
  //   lastName: FormControl<string>,
  //   age: FormControl<number>,
  // }>;
  form!: UserForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      username: this.fb.nonNullable.control('blackBriar'),
      firstName: this.fb.nonNullable.control('David'),
      lastName: this.fb.nonNullable.control('Webb'),
      age: this.fb.nonNullable.control(23),
    });
   }

  ngOnInit(): void {}

  patchForm() {
    this.form.patchValue({
      age:999,
      firstName: "Michael",
      lastName: "West",
      username: 'mWest997'
    });
  }

  resetForm(){
    this.form.reset();
  }

}
