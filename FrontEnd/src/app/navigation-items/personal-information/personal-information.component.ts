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

  selectedAvatar: number | null=  null;

  selectAvatar(avatarNumber: number) {
    this.selectedAvatar = avatarNumber;
  }

  selectedGender: string = '';

  saveGender() {
    const maleInput = document.getElementById('male-input') as HTMLInputElement;
    const femaleInput = document.getElementById('female-input') as HTMLInputElement;

    if (maleInput.checked) {
      this.selectedGender = 'male';
      this.hideFemaleAvatars();
    } else if (femaleInput.checked) {
      this.selectedGender = 'female';
      this.hideMaleAvatars();
    }
    console.log(this.selectedGender);
  }

  hideFemaleAvatars() {
    const avatar1 = document.getElementById('avatar1');
    const avatar2 = document.getElementById('avatar2');
    const avatar3 = document.getElementById('avatar3');
    const avatar4 = document.getElementById('avatar4');
    const avatar5 = document.getElementById('avatar5');
    const avatar6 = document.getElementById('avatar6');

    if (avatar1) avatar1.style.display = 'inline-block';
    if (avatar2) avatar2.style.display = 'inline-block';
    if (avatar3) avatar3.style.display = 'inline-block';
    if (avatar4) avatar4.style.display = 'none';
    if (avatar5) avatar5.style.display = 'none';
    if (avatar6) avatar6.style.display = 'none';

  }

  hideMaleAvatars() {
    const avatar1 = document.getElementById('avatar1');
    const avatar2 = document.getElementById('avatar2');
    const avatar3 = document.getElementById('avatar3');
    const avatar4 = document.getElementById('avatar4');
    const avatar5 = document.getElementById('avatar5');
    const avatar6 = document.getElementById('avatar6');

    if (avatar1) avatar1.style.display = 'none';
    if (avatar2) avatar2.style.display = 'none';
    if (avatar3) avatar3.style.display = 'none';
    if (avatar4) avatar4.style.display = 'inline-block';
    if (avatar5) avatar5.style.display = 'inline-block';
    if (avatar6) avatar6.style.display = 'inline-block';

  }
  
}