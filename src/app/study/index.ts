import { Component, OnInit } from '@angular/core';
import { Hero } from '../herolist/hero';

@Component({
  selector: 'szj-index',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class szjIndex implements OnInit {
  elClass : string;
  addClass : boolean = true;
  imgUrl: string = '../../assets/img/weixin.png';
  dataList = [
    new Hero(1, 'Windstorm', false),
    new Hero(2, 'Bombasto', false),
    new Hero(3, 'Magneta', false),
    new Hero(4, 'Tornado', false),
  ];
  // ngForm
  stu = {};//空对象
  public issubmit: boolean = false;

  constructor(){

  }
  ngOnInit(){
    console.log("开始学习angular");
  }

  checkEleClass(el){ // 动态添加class方法
    this.addClass = !this.addClass;
    this.elClass = el.currentTarget.getAttribute("class");
  }

  showOrHide(){ // 动态增减数组数据
    if(this.dataList.length > 3){
      this.dataList = this.dataList.splice(0, this.dataList.length - 1);
    }else{
      this.dataList = [
        new Hero(1, 'Windstorm', false),
        new Hero(2, 'Bombasto', false),
        new Hero(3, 'Magneta', false),
        new Hero(4, 'Tornado', false),
      ];
    }
  }

  changeValue(e, value){
    // 模板引用变量
    console.log("attribute:value="+e.currentTarget.getAttribute("value"))
  }
  onSubmit(stuForm) {
    console.info(stuForm);
    this.issubmit = true;
    setTimeout(() => {
      this.issubmit = false;
      // this.stu = {}; 初始化form
    }, 1000);
  }
}