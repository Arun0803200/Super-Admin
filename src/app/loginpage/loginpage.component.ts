import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../_serices/authService';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}
  loginData: any = FormGroup;
  error = '';
  ngOnInit() {
    this.form();
  }
  form() {
    this.loginData = this.formBuilder.group({
      username: [],
      password: []
    });
  }
  loading: boolean = true;
  onSubmit() {
    // const newUser = {
    //   "username": "Arun",
    //   "password": "Welcome123$"
    // }
    // const stringifyValue = 'srring';
    // sessionStorage.setItem('currentUser', stringifyValue);
    const objectValue = this.loginData.value;
    console.log(objectValue, 'valueee');
    this.authService.login(objectValue);
    this.router.navigate(['menubar'])
  }
}
