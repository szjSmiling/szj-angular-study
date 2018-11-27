import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css']
})
export class FastComponent implements OnInit {
  list=[{img:'../../assets/img/icon.png',title:'月光优卡',money:'5000元',lei1:'急速放贷',lei2:'新用户秒批'},{img:'../../assets/img/icon.png',title:'月光优卡',money:'5000元',lei1:'急速放贷',lei2:'新用户秒批'},{img:'../../assets/img/icon.png',title:'月光优卡',money:'5000元',lei1:'急速放贷',lei2:'新用户秒批'}]
  constructor() { }

  ngOnInit() {
  }

}
