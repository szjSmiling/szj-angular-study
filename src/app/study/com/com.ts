import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'szj-com',
  templateUrl: './com.html',
  styleUrls: ['./com.scss']
})

export class SzjCom implements OnInit {
  @Input() fromFatherValue;
  @Output() fromChild = new EventEmitter<string>();
  info: string = "爸, 我是子组件1.";
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges) { // 先于ngOnInit调用
    if(!changes.fromFatherValue.firstChange){
      this.fromFatherValue = changes.fromFatherValue.currentValue;
      console.log("父 --> 子: "+this.fromFatherValue+"  ngOnChanges");
    }
  }

  ngOnInit(){
    console.log("父 --> 子: "+this.fromFatherValue+"  ngOnInit");
  }

  ngAfterContentInit(){
    console.log("组建内容初始化后调用--子页面  ngAfterContentInit")
  }

  transInfo(){
    console.log("emit 开始传递消息......");
    this.fromChild.emit(this.info);
  }
}