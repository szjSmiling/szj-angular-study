import { Component, Injector, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from '../herolist/hero';
import { AppCountdownTimerComponent2 } from './com/app-countdown-timer/app-countdown-timer.component2';
import { MissionService } from './com/missioncontrol.service';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';// 自定义弹框
import { PopupService } from './popup/popup.service';// 自定义弹框

@Component({
  selector: 'szj-index',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  // styles: ['h1 { font-weight: normal; }'],
  providers: [MissionService]
})

export class szjIndex implements OnInit {
  // method2: ViewChild
  @ViewChild(AppCountdownTimerComponent2)
  private timerComponent: AppCountdownTimerComponent2
  seconds() { return 0; }
  ngAfterViewInit() {
    setTimeout(()=> this.seconds = () => this.timerComponent.seconds, 0)
  }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

  // method3: service
  astronauts = ['Lovell', 'Swigert', 'Haise']
  history: string[] = []
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas']
  nextMisson = 0;

  // 基本数据
  num: number = 0;
  pi:number = 3.14159;
  a:number = 8.2515;
  b:number = 156.548;
  today: Date = new Date();
  title: string = "test";
  public elClass : string;
  public addClass : boolean = true;
  public stu = {};//空对象
  public issubmit: boolean = false;
  public imgUrl: string = '../../assets/img/weixin.png';
  public dataList = [
    new Hero(1, 'Windstorm', false),
    new Hero(2, 'Bombasto', false),
    new Hero(3, 'Magneta', false),
    new Hero(4, 'Tornado', false),
  ];

  constructor( private missonService: MissionService, injector: Injector, public popup: PopupService ){
    // service
    missonService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission.`)
      }
    )
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
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
      // this.stu = {}; // 初始化form
    }, 1000);
  }
  changeElement(): void { // ngSwitch ,用于多个组件之间的切换
    if (this.num > 3) {
      this.num = 0;
    }
    this.num++;
  }

  // service
  announce() {
    let mission = this.missions[this.nextMisson ++]
    this.missonService.announceMission(mission)
    this.history.push(`Mission "${mission}" announced`)
    if (this.nextMisson >= this.missions.length ) {
      this.nextMisson = 0;
    }
  }
}