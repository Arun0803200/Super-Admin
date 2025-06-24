import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordSerice } from '../_serices/forgotPasswordSerice';
@Component({
  selector: 'app-forgot-password-popup',
  templateUrl: './forgot-password-popup.component.html',
  styleUrls: ['./forgot-password-popup.component.css']
})
export class ForgotPasswordPopupComponent {
  constructor(private formBuilder: FormBuilder, private forgotPasswordSerice: ForgotPasswordSerice) {}
  formData: any = FormGroup
  ngOnInit() {
    this.form()
  }
  form() {
    const userData = this.forgotPasswordSerice.getPopupValue();
    this.formData = this.formBuilder.group({
      email: [userData.username, Validators.required]
    });
  }
  search() {
    
  }
}
