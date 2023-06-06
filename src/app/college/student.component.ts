import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 constructor(private formBuilder: FormBuilder, private studentService: StudentsService, private ngToastService: NgToastService, private route: Router) {}
 createForm: any = FormGroup;
 ngOnInit() {
  this.form()
 }
 form() {
  console.log('form enterrrrrrr');
  this.createForm = this.formBuilder.group({
    "email": [],
    "password": [],
    "firstName": [],
    "lastName": [],
    "address1": [],
    "address2": [],
    "city": [],
    "state": [],
    "country": [],
    "mobileNumber": [],
    "collegeName": [],
    "collegeCode": [],
    "universityName": [],
  });
 }
 onSubmit() {
  console.log('button enterrrrrrr');
    const createRequest: any = this.createForm.value;
    const resultRequest: any = {};
    resultRequest.address1 = createRequest.address1;
    resultRequest.address2 = createRequest.address2;
    resultRequest.city = createRequest.city;
    resultRequest.collegeCode = createRequest.collegeCode;
    resultRequest.collegeName = createRequest.collegeName;
    resultRequest.country = createRequest.country;
    resultRequest.email = createRequest.email;
    resultRequest.firstName = createRequest.firstName;
    resultRequest.lastName = createRequest.lastName;
    resultRequest.mobileNumber = createRequest.mobileNumber;
    resultRequest.password = createRequest.password;
    resultRequest.state = createRequest.state;
    resultRequest.universityName = createRequest.universityName;
    this.studentService.create(resultRequest).subscribe((data: any) => {
      if (data.status === 1) {
        this.ngToastService.success({
          detail: 'Success Message',
          summary: data.message,
          duration: 3000
        });
        this.route.navigate(['menubar']);
      }
      
    });
  }
  cancle() {
    this.route.navigate(['menubar']);
  }
}
