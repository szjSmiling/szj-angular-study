import {
  Component, OnInit, ViewChild, ViewContainerRef,NgModule,
  ComponentFactoryResolver, Compiler, ComponentFactory
} from '@angular/core';
import { coms } from './comMgr';

@Component({
  selector: 'szj-router1',
  templateUrl: './router1.html',
  styleUrls: ['./router.scss']
})

export class SzjRouter1 implements OnInit {
  // 动态组件
  index: boolean = true;
  @ViewChild("dmroom", { read: ViewContainerRef }) dmRoom: ViewContainerRef;
  constructor(
    private cp : Compiler, // 动态创建组件需要
    private cfr: ComponentFactoryResolver // 动态加载已声明的组件需要
  ){  this.reset(); }
  addComponent() {
    this.index = !this.index;
    let com;
    if(this.index){
      com = this.cfr.resolveComponentFactory( coms['AdComponent1'] );
    }else{
      com = this.cfr.resolveComponentFactory( coms['AdComponent2'] );
    }
    this.dmRoom.createComponent( com );
  }
  createComplete(){
    this.dmRoom.createComponent(this.createModule());
  }
  createModule(): ComponentFactory<any>{
    @Component({
      template:'创建动态组件'
    })
    class DyCom {}
    @NgModule({
      declarations: [ DyCom ]
    })
    class DyModule {}

    return this.cp.compileModuleAndAllComponentsSync( DyModule ).componentFactories.find(
      comFac => comFac.componentType === DyCom
    )
  }
  // directives
  radioValue: string = '';
  public showSad: boolean = true;
  public hero: string = "excited";
  public heroes = [
    {id:0, name: "Mr.Nice", emotion: "happy", flag: true},
    {id:1, name: "Mr.Wang", emotion: "sad", flag: false},
    {id:2, name: "Mrs.Li", emotion: "confused", flag: true},
    {id:3, name: "Mrs.Sun", emotion: "excited", flag: false}
  ];
  trackById(index: number, hero): number {
    return hero.id;
  }

  // pipe
  power: number = 2;
  factor: number = 5;
  canFly = true;
  herolist: any[] = [
    {name: "Sun", canFly: true},
    {name: "Jie", canFly: false},
    {name: "Jelly", canFly: true},
  ];
  herolist2: any[] = [
    {name: "Sun", canFly: true},
    {name: "Jie", canFly: false},
    {name: "Jelly", canFly: true},
  ];
  addHero(name: string, type: number) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    if(type === 1){
      // 直接使用 this.herolist.push(hero), 不会被检测更新.
      // 需要新建数组.
      let arr = new Array();
      arr.push(hero);
      this.herolist = [...this.herolist,...arr];
    }else if(type === 2){
      // 方法二: 使用非纯pipe
      this.herolist.push(hero);
    }
  }
  reset() { this.herolist = this.herolist2 }

  // 基础数据
  public childName: string = '组件1';
  public fromParent: string = '我是你爸';
  public tabs = [
    {active: true,name  : '组件1',icon  : 'apple'},
    {active: false,name  : '组件2',icon  : 'android'}
  ];
  ngOnInit(){
    console.log("进入router1.  ngOnInit");
    let com = this.cfr.resolveComponentFactory( coms['AdComponent1'] );
    this.dmRoom.createComponent( com );
    let arr = this.changeDOM();
    console.log(arr)
  }
  ngAfterContentInit(){
    console.log("组建内容初始化后调用--父页面  ngAfterContentInit")
  }
  ngAfterViewInt(){
    console.log("组件相应的视图初始化之后调用.  ngAfterViewInt")
  }
  selectItem(who){
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

  changeDOM(){ // 过滤数组
    console.log("操作DOM的方法.  ngOnInit");
    return this. heroes.filter(hero => hero.flag )
  }
}