import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public saixu:string;
  public saixu1:string;
  public saixu2:string;
  list=[{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'},{title:'微粒贷',detail:'急速放贷 新用户秒批',money:'3000元',danwei:'单位（元）',max:'用户最高可借'}]
  xuanze=[{name:'全部',select:true},{name:'不限',select:false},{name:'下款率最高',select:false},{name:'速度最快',select:false},{name:'额度最大',select:false},{name:'利率最低',select:false}]
  xuanze1=[{name:'全部',select:true},{name:'不限',select:false},{name:'0-1000元',select:false},{name:'1000-5000元',select:false},{name:'5000-10000元',select:false},{name:'10000-50000元',select:false},{name:'50000元以上',select:false}]
  xuanze2=[{name:'全部',select:true},{name:'全部需求',select:false},{name:'不查征信',select:false},{name:'额度大',select:false},{name:'通过率高',select:false},{name:'网黑福利',select:false},{name:'利率快',select:false},{name:'放贷快',select:false}]
  constructor() {
     this.saixu = ''
     this.saixu1 = ''
     this.saixu2 = ''
   }

  ngOnInit() {
  }
  // 封装筛选点击事件
  saixuan(index,data){
    for(let j=0;j<data.length;j++){
      if(index==j){
        data[j]['select'] = true
        this.saixu = data[j]['name']
        console.log(this.saixu)
      }else{
        data[j]['select'] = false
      }
    }
  }
  paixu(index){
    this.saixuan(index,this.xuanze)
  }
  edu(index){
    this.saixuan(index,this.xuanze1)
  }
  leixing(index){
    this.saixuan(index,this.xuanze2)
  }
}
