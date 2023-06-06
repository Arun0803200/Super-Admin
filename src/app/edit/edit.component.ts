import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { StudentsService } from '../students.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
constructor(private formBuilder: FormBuilder, private router:Router, private actieRoute:ActivatedRoute, private studentService: StudentsService, private ngToastService: NgToastService) {}
  editForm: any = FormGroup;
  ids: any;

  ngOnInit() {
    this.form();
    this.angFolder();
  }

  form() {
    this.editForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      address1: [],
      address2: [],
      city: [],
      state: [],
      country: [],
      mobileNumber: [],
      universityName: [],
      collegeName: [],
      collegeCode: [],
      id: []
    });
  }

  angFolder() {
    this.actieRoute.params.subscribe((data: any) => {
      this.ids = data.id;
      this.studentService.detail(this.ids).subscribe((data: any) => {
        const originaldata: any =  data.data;
        console.log(originaldata.address1, 'dataaaaaaa');
        this.editForm.patchValue({
          firstName: originaldata.firstName,
          lastName: originaldata.lastName,
          address1: "kgfgfdsgghfd",
          address2: originaldata.address2,
          city: originaldata.city,
          state: originaldata.state,
          country: originaldata.country,
          mobileNumber: originaldata.mobileNumber,
          universityName: originaldata.universityName,
          collegeName: originaldata.collegeName,
          collegeCode: originaldata.collegeCode,
          id: this.ids
        })
      })
    });
  }
  onSubmit() {
    const editRequest: any = this.editForm.value;
    const finalRequest: any = {};
    finalRequest.firstName = editRequest.firstName;
    finalRequest.lastName = editRequest.lastName;
    finalRequest.address1 = editRequest.address1;
    finalRequest.address2 = editRequest.address2;
    finalRequest.city = editRequest.city;
    finalRequest.state = editRequest.state;
    finalRequest.country = editRequest.country;
    finalRequest.mobileNumber = editRequest.mobileNumber;
    finalRequest.universityName = editRequest.universityName;
    finalRequest.collegeName = editRequest.collegeName;
    finalRequest.collegeCode = editRequest.collegeCode;
    this.studentService.update(finalRequest, editRequest.id).subscribe(async (data: any) => {
      console.log(data, 'data....', data.status);
        console.log('enterrrrrr')
        await this.ngToastService.success({
          detail: "Success Message",
          summary: "Successfully Update",
          duration: 5000,
        });
        this.router.navigate(['menubar/']);
    })
  }
  cancel() {
    this.router.navigate(['menubar/']);
  }
  
}
