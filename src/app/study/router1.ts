import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'szj-router1',
  templateUrl: './router1.html',
  styleUrls: ['./router.scss']
})

export class SzjRouter1 implements OnInit {
  public childName: string = '组件1';
  public fromParent: string = '我是你爸';
  public tabs = [
    {active: true,name  : '组件1',icon  : 'apple'},
    {active: false,name  : '组件2',icon  : 'android'}
  ];
  constructor(){

  }
  ngOnInit(){
    console.log("进入router1,  ngOnInit");
    this.changeDOM();
  }
  ngAfterContentInit(){
    console.log("组建内容初始化后调用.--父  ngAfterContentInit")
  }
  ngAfterViewInt(){
    console.log("组件相应的视图初始化之后调用.  ngAfterViewInt")
  }
  selectItem(who){
    console.log(who)
    this.childName = who.name;
    this.tabs.forEach((e, i)=>{
      if(who.name == e.name){
        e.active = true;
      }else{
        e.active = false;
      }
    })
  }
  fromChildCom(data){
    console.log("子 --> 父 : "+data);
    this.fromParent = "别叫了, 我听见了!";
  }

  changeDOM(){
    console.log("操作DOM的方法.  ngOnInit");
  }
}