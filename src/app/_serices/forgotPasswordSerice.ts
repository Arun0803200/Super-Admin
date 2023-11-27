import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ForgotPasswordSerice {
    userData: any
    setPopupValue(data: any) {
        this.userData = data;
    }
    getPopupValue() {
        return this.userData;
    }
}