import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { StudentsService } from '../students.service';
import { NgToastService } from 'ng-angular-popup';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  customer: any
  popoverTitle: string = 'Delete popup';
  popoverMessage: string = 'You can delete the detail';
  cancleClicked: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService:StudentsService, private router: Router, private ngToastService: NgToastService) {
};
filterForm: any = FormGroup
ngOnInit() {
  this.forms();
  this.userService.GetData(0,0,'','').subscribe(data => {
    const value: any = data;
    this.customer = value.data;
  });
}

forms() {
  this.filterForm = this.formBuilder.group({
    universityName: [],
    collegeName: []
  })
}

goToPage(): void {
  this.router.navigate(['menubar/student']);
}
edit(id: string){
  this.router.navigate(['menubar/edit/'+id]);
}
delete(id: string) {
  this.userService.delete(id).subscribe( async data => {
    await this.ngOnInit();
    await this.ngToastService.success({
      detail: "Success Message",
      summary: "Successfully Deleted !!",
      duration: 5000,
    });
  });
  // this.userService.GetData().subscribe((data: any) => {
  //   console.log
  //   this.customer = data.data
  // })  
}
resets() {
  this.filterForm.patchValue({
    universityName: '',
    collegeName: ''
  });
  this.userService.GetData(0,0,'','').subscribe(data => {
    const value: any = data;
    this.customer = value.data;
  });
}
onSubmit() {
  const value = this.filterForm.value
  this.userService.GetData(0, 0, value.collegeName, value.universityName).subscribe(data => {
    const value: any = data;
    this.customer = [];
    this.customer = value.data
  });
  console.log('submitssss', this.filterForm.value, this.customer)
}
// pagenation
  p: number = 1;
}
