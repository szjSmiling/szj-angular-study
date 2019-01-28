import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'szj-router2',
  templateUrl: './router2.html',
  styleUrls: ['./router.scss']
})

export class SzjRouter2 implements OnInit {
  public showItem1: boolean = false;
  public showItem2: boolean = false;
  public showItem3: boolean = true;
  switchTitle(who){
      this.showItem1 = false;
      this.showItem2 = false;
      this.showItem3 = false;
    if(who === 1){
      this.showItem1 = true;
    }else if(who === 2) {
      this.showItem2 = true;
    }else{
      this.showItem3 = true;
    }
  }
  constructor(){}
  ngOnInit(){
     console.log("进入router2");
  }
}