import { Component, OnInit, Input } from '@angular/core';// 导入Input符号。
import { ActivatedRoute } from '@angular/router'; // 获取创建本组件的路由,提取出id
import { Location } from '@angular/common'; // 导航回上一个视图(Angular 的服务，用来与浏览器打交道)

// 导入数据项
import { Hero } from '../herolist/hero';
import { HeroService }  from '../hero-service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
//这个组件所做的只是通过hero属性接收一个英雄对象，并显示
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; //添加一个带有装饰器的属性。@Input()hero ,仅仅获取父组件传过来的数据
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }
}
