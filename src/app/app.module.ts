import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { StudentComponent } from './college/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstComponentComponent } from './first-component/first-component.component';
import { EditComponent } from './edit/edit.component';
import { NgToastModule } from 'ng-angular-popup';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthService } from './_serices/authService';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FirstComponentComponent,
    EditComponent,
    LoginpageComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    NgxPaginationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
