import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    let user = localStorage.getItem('user');
    this.fullName = user && JSON.parse(user)[0].name;
    this.username = user && JSON.parse(user)[0].username;
    this.email = user && JSON.parse(user)[0].email;
    this.phoneNo = user && JSON.parse(user)[0].phoneNo;
    this.password = user && JSON.parse(user)[0].password;
    this.iconSrc = "fas fa-edit";
  }

  fullName: string = '';
  username: string = '';
  email: string = '';
  phoneNo: string = '';
  password: string = '';
  personalInfoForm!: FormGroup;
  isEditMode: boolean = false;
  iconSrc: string = '';

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      fullName: [this.fullName, Validators.required],
      username: [this.username, Validators.required],
      phoneNo: [this.phoneNo, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, Validators.required],
      gender: ['', Validators.required]
    });
  }

  toggleFieldEditMode(fieldName: string): void {
    this.fieldEditMode[fieldName] = !this.fieldEditMode[fieldName];
    
    if (this.fieldEditMode[fieldName]) {
      this.fieldEditMode = { ...this.fieldEditMode, [fieldName]: true };
    } else {
      this.savePersonalInfo();
    }
  }

  savePersonalInfo(): void {
    const updatedInfo = this.personalInfoForm.value;
    console.log(updatedInfo); 
  }

  fieldEditMode: any = {
    fullName: false,
    username: false,
    phoneNo: false,
    email: false,
    password: false
  };

  handleFieldClick(event: Event, fieldName: string) {
    if (!this.fieldEditMode[fieldName]) {
      event.stopPropagation();
    }
  }

  
  
}