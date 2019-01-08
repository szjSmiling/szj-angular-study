import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ad-com1',
  template: `<h2>success---><span>{{ type }}</span></h2>`,
  styleUrls:['./com.scss']
})

export class AdComponent1 implements OnInit {
  @Input() type: string = "动态组件1";

  ngOnInit(){  }
}