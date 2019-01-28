import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModelGroup, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'szj-valid',
  templateUrl: './valid.html',
  styleUrls: ['./form.scss']
})
export class SzjFormValid implements OnInit {
  private registForm: FormGroup;
  mobileValidator(control: FormControl): any{
    const mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const result = mobileReg.test(control.value);
    return result ? null : { mobile: { info: '*请输入正确的手机号' } };
  }
  constructor(private fb: FormBuilder) {
    this.registForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['',this.mobileValidator],
      passwordGroup: this.fb.group({
        password: ['',Validators.minLength(6)],
        pconfirm: ['']
      },{validator: this.equalValidator})
    });
  }
  ngOnInit(){
    console.log()
  }
  equalValidator(group: FormGroup): any {
    const password = group.get('password') as FormControl;
    const pconfirm = group.get('pconfirm') as FormControl;
    const isEqule: boolean = ( password.value === pconfirm.value);
    return isEqule ? null : { equal: { info: '*两次密码不一致' } };
  }
  onSubmit(type, value: any){
    if(type === 1){
      console.log(value)
    }else{
      console.log(value)
      console.log(this.registForm.get('username').valid)
      console.log(this.registForm.get('mobile').valid)
      console.log(this.registForm.get('passwordGroup').valid)
      console.log(this.registForm.get('passwordGroup').get('pconfirm').valid)
      if(this.registForm.valid){
        alert(1)
      }
    }
  }
}