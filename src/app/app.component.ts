import { Component } from '@angular/core';
import { AuthService } from './_serices/authService';
import { User } from './_models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginValue: any
  constructor(
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.loginValue = x);
  }
  ngOnInit() {
    console.log(this.loginValue);
  }
}
