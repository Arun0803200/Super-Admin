import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private formBuilder: FormBuilder) {}
  adminData: any = FormGroup;

  ngOnInit() {
    this.adminData = this.formBuilder.group({});
  }
}
