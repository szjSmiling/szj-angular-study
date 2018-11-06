import { Component, OnInit } from '@angular/core';
import { Hero } from '../../herolist/hero';
import { Title } from '../../herolist/titlelist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title = Title
  selectedTitle: Hero;
  onSelect(title: Hero): void{
    this.selectedTitle = title;
    console.log('title',title);
  }

  ngOnInit() {
    console.log("生命钩子函数-ngOnInit");
  }

}
