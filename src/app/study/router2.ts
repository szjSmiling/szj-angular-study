import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'szj-router2',
  templateUrl: './router2.html',
  styleUrls: ['./router.scss']
})

export class SzjRouter2 implements OnInit {
  constructor(){

  }

  ngOnInit(){
     console.log("进入router2");
  }
}