import { Component } from '@angular/core';
import {
  FormGroup, FormControl, FormBuilder, // 表单控件使用
  Validators, FormArray   // 表单验证使用
} from '@angular/forms';

@Component({
  selector: 'name-editor',
  templateUrl: './name-edit.html',
  styleUrls: ['./form.scss']
})

export class NameEditComponent {
  // 针对单个输入框
  private name = new FormControl('default');
  // 针对多个输入框
  // private profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  profileForm = this.fb.group({ // 使用FormBuilder生成表单
    firstName: ['', Validators.required], // :必填项
    lastName: [''],
    address: this.fb.group({
      street: [''],city: [''],
      state: [''],zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  //注入 FormBuilder 服务
  constructor(private fb: FormBuilder) { }

  updateName() {this.name.setValue('Nancy');}
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
  }
  onSubmit() {console.warn(this.profileForm.value)}
  // 访问 FormArray 控件
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}