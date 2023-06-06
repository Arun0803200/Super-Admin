import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { User } from "../_models/user";
@Injectable({ providedIn: "root" })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(
          JSON.parse(sessionStorage.getItem("currentUser") || "{}")
        );
        this.currentUser = this.currentUserSubject.asObservable();
      }

      login(loginData: any) {
        // post to fake back end, this url will be handled there...
        console.log('yes')
        return this.http
          .post<any>(`http://localhost:3000/api/admin-user/login`, loginData).subscribe(value => {
            console.log(value, 'user');
              sessionStorage.setItem("currentUser", JSON.stringify(value));
              this.currentUserSubject.next(value);
              return value;
          })
      }
}