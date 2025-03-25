import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
// @ts-ignore
import {load} from '@cashfreepayments/cashfree-js';
import { AuthService } from '../_serices/authService';
declare var Razorpay: any;
@Component({
  selector: 'app-iochat',
  templateUrl: './iochat.component.html',
  styleUrls: ['./iochat.component.css']
})
export class IochatComponent {
  private socket: any;
  messages: string[] = [];
  message: string = '';

  constructor(
    private authService: AuthService
  ) {
    this.socket = io('http://localhost:3001');
  }

  cashfree: any;
  ngOnInit() {
    this.socket.on('message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    this.message = '';
  }
  async pay() {
    // Start the payment
    this.cashfree = await load({
      mode: 'sandbox',
    });
    let checkoutOptions = {
      paymentSessionId: 'session_3Qxx-pGb1eZm3c6fqhjbtXhOrgFAWsDzgyt9FLVVlod_MfZD4yLgkl40R7EXP1TWIRLVxTC1miKB5r9RY9cXTnEkEMhvkXi0-DchreM-6nYM',
      redirectTarget: '_modal'
    }
    this.cashfree.checkout(checkoutOptions).then((value: any) => {
      console.log(value);
    })
  }
  async razorPay() {
    this.authService.razorpayOrder({amount: 5}).subscribe((order: any) => {
      const options = {
        key: "replace_key",
        amount: order.amount,
        currency: "INR",
        name: "Arundhika",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response: any) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Arundhika Arun",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    });
  }
}
