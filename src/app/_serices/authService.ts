import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgToastService } from 'ng-angular-popup';


import { User } from "../_models/user";
@Injectable({ providedIn: "root" })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private ngToastService: NgToastService) {
        this.currentUserSubject = new BehaviorSubject<User>(
          JSON.parse(sessionStorage.getItem("currentUser") || "{}")
        );
        this.currentUser = this.currentUserSubject.asObservable();
      }

      login(loginData: any) {
        // post to fake back end, this url will be handled there...
        console.log('yes')
        return this.http
          .post<any>(`http://localhost:3000/api/admin-user/login`, loginData)
      }

      razorpayOrder(data: any) {
        return this.http.post(`http://localhost:3000/api/admin-user/razorpay-order`, data)
      }
}