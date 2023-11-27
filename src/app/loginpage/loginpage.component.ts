import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_serices/authService';
import { NgToastService } from 'ng-angular-popup';
// import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordPopupComponent } from '../forgot-password-popup/forgot-password-popup.component';
import { ForgotPasswordSerice } from '../_serices/forgotPasswordSerice';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private ngToastService: NgToastService, private dialog: MatDialog, private forgotPasswordSerice:ForgotPasswordSerice ) {}
  loginData: any = FormGroup;
  submitted = false;
  error = '';
  ngOnInit() {
    this.form();
  }
  form() {
    this.loginData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loading: boolean = true;
  // get f(): { [key: string]: AbstractControl; } {
  //   return this.loginData.controls;
  // }
  async onSubmit() {
    this.submitted = true;
    if (this.loginData.invalid) {
      return;
    }
    const objectValue = this.loginData.value;
    console.log(objectValue, 'valueee');
    await this.authService.login(objectValue).subscribe(value => {
      this.ngToastService.success({
        detail: 'Success Message',
        summary: 'Logged in successfully !!',
        duration: 3000
      })
        sessionStorage.setItem("currentUser", JSON.stringify(value));
        this.router.navigate(['menubar'])
        return value;
    }, (err) => {
      this.ngToastService.error({
        detail: 'Error Message',
        summary: 'Invalid Username or Passwor..!!',
        duration: 5000
      });
    });
  }
  reset() {
    this.submitted = false;
    this.loginData.reset();
  }
  forgotPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordPopupComponent, {
      width: '25%',
      height: '40%',
      data: { title: 'Popup Title', message: 'This is the popup message.', data:  this.loginData.username}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.forgotPasswordSerice.setPopupValue(this.loginData.value);
  }
  userData() {
    return this.loginData.value;
  }
}
