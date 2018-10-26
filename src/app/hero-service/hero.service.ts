import { Injectable } from '@angular/core';
// 导入一些所需的 HTTP 符号：
import { HttpClient, HttpHeaders } from '@angular/common/http';
// 捕获错误
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';//可观察对象版本的 HeroService
import { MessageService } from '../hero-service/message.service';
import { Hero } from '../herolist/hero';
import { HEROES } from '../herolist/mock.heroes'; // 写死假数据的时候使用

// 这个新的服务导入了Angular的Injectable符号，并且给这个服务类添加了装饰器。
// 它把这个类标记为依赖注入系统的参与者之一。类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖。

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  //@Injectable()装饰器会接受该服务的元数据对象

  private heroesUrl = 'api/heroes';

  constructor(
    // 把 HttpClient 注入到构造函数中一个名叫 http 的私有属性中。
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // 保留对 MessageService 的注入。你将会频繁调用它，因此请把它包裹进一个私有的 log 方法中。
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroesList1(): Hero[] {// 添加一个getHeroes方法，让它返回模拟的英雄列表。
    return HEROES;
  }

  getHeroesList2(): Observable<Hero[]> {// 可观察对象版本的 HeroService
    // 在获取到英雄数组时发送一条消息。
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟数据的数组。
    return of(HEROES);
  }
  getHeroesList(): Observable<Hero[]> {// 使用 HttpClient 的获取数据
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero1(id: number): Observable<Hero> {// getHero() 也有一个异步函数签名
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero (hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
