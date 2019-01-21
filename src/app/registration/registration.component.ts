import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

registerForm: FormGroup;
  
  constructor(private _form: FormBuilder, private _authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this._form.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this._authService
    .register(this.registerForm.value)
    .subscribe( () => this._authService.login(this.registerForm.value));
  }
}
