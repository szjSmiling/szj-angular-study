import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ad-com2',
  template: `<h2>success---><span>{{ type }}</span></h2>`,
  styleUrls:['./com.scss']
})

export class AdComponent2 implements OnInit {
  @Input() type: string = "动态组件2";

  ngOnInit(){  }
}