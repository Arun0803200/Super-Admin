import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
constructor(private router: Router) {}
  createpdf() {
    this.router.navigate(['menubar/personal']);
  }
}
