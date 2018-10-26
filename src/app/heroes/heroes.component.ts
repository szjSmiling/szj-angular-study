import { Component, OnInit } from '@angular/core';
import { Hero } from '../herolist/hero';
// import { HEROES } from '../herolist/mock.heroes';// 开启服务后,就不需要它了
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  heroes1: Hero[];
  // selectedHero: Hero; // Don't give the default value
  // selectedHero: Hero = { // default value
  //   id: 1,
  //   name: 'Jelly Sun'
  // };

  // 往构造函数中添加一个私有的heroService，其类型为HeroService。
  constructor(private heroService: HeroService) {
    // 这个参数同时做了两件事：
    // 1.声明了一个私有heroService属性;
    // 2.把它标记为一个HeroService的注入点。
    // 当Angular创建HeroesComponent时，依赖注入系统就会把这个heroService参数设置为HeroService的单例对象。
  }

  getHeroes(): void { // 创建一个函数，以从服务中获取这些数据。
    // 注意: getHeroes() 方法,heroService 真正请求服务器数据时是异步执行;
    // f1: 如下,同步赋值,这里包含的假设是服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面。
    this.heroes1 = this.heroService.getHeroesList1();

    // f2: 如下,等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。
    // 然后，subscribe 函数把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。
    // 这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了。
    this.heroService.getHeroesList()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {// 生命周期钩子,它会在构造出HeroesComponent 的实例之后的某个合适的时机调用ngOnInit
    this.getHeroes();
  }

  // onSelect(hero: Hero): void{ // 对应上面的变量selectedHero 而存在
  //   this.selectedHero = hero;
  // }

}
