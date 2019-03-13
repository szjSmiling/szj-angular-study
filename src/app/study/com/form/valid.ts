import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModelGroup, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'szj-valid',
  templateUrl: './valid.html',
  styleUrls: ['./form.scss']
})
export class SzjFormValid implements OnInit {
  public hero :object = {name:""};
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


  // // obversable
  // const locations = new Observable((observer) => {
  // // Get the next and error callbacks. These will be passed in when
  // // the consumer subscribes.
  //   const {next, error} = observer;
  //   let watchId;

  //   // Simple geolocation API check provides values to publish
  //   if ('geolocation' in navigator) {
  //     watchId = navigator.geolocation.watchPosition(next, error);
  //   } else {
  //     error('Geolocation not available');
  //   }

  //   // When the consumer unsubscribes, clean up data ready for next subscription.
  //   return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
  // });

  // // Call subscribe() to start listening for updates.
  // const locationsSubscription = this.locations.subscribe({
  //   next(position) { console.log('Current Position: ', position); },
  //   error(msg) { console.log('Error Getting Location: ', msg); }
  // });

  // // Stop listening for location after 10 seconds
  // setTimeout( () => {
  //   this.locationsSubscription.unsubscribe();
  // }, 10000)
}