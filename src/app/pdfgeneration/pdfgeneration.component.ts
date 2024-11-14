import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pdfgeneration',
  templateUrl: './pdfgeneration.component.html',
  styleUrls: ['./pdfgeneration.component.css']
})
export class PDFGenerationComponent {
  constructor(private formBuilder: FormBuilder) {}

  candidateData: any = FormGroup;

  ngOnInit() {
    this.candidateData = this.formBuilder.group({
      name: [],
      email: [],
      phoneNumber: [],
      address: [],
      objective: [],
      experiences: this.formBuilder.array([]),
      education: this.formBuilder.array([]),
      socialMedia: this.formBuilder.array([])
    });
  }

  onSubmit() {
    console.log(this.candidateData.value);
  }

  // Expirences

  containers: Array<number> = [];

  add() {
    this.containers.push(this.containers.length);
    const experiencesArray = this.candidateData.get('experiences') as FormArray;
    experiencesArray.push(this.formBuilder.group({
      companyName: [],
      companyAddress: [],
      durationTime: [],
      endingDate: [],
      position: [],
      summary: []
    }));
  }

  deleteMe(index: number) {
    this.containers.splice(index, 1);
  }

  // Education

  educationArr: Array<number> = [];

  addEducation() {
    console.log(this.educationArr.length, 'lengthhhhhh')
    this.educationArr.push(this.educationArr.length);
    const educationArray = this.candidateData.get('education') as FormArray;
    educationArray.push(this.formBuilder.group({
      collegeName: [],
      course: [],
      startingDate: [],
      endingDate: [],
      degree: []
    }));
  }

  deleteEdu(index: number) {
    this.educationArr.splice(index, 1);
  }

  socialMediaContainer: Array<number>= [];

  // Social Media
  addSocialMedia() {
    this.socialMediaContainer.push(this.socialMediaContainer.length)
    const socialArray = this.candidateData.get('socialMedia') as FormArray;
    socialArray.push(this.formBuilder.group({
      name: [],
      link: []
    }));
  }

  deleteSocialMedia(index: number) {
    this.socialMediaContainer.splice(index, 1);
  }

  // image into base64

  public base64textString:String="";
  
  handleFileSelect(evt: any){
      var files = evt.target.files;
      var file = files[0];
      console.log(file.type, 'typeeeeeeeee', file.name);
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt: any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log(btoa(binaryString));
    }
}
