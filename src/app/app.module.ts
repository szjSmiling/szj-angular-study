import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';// 导入 HttpClientModule 符号，
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 内存 Web API modules
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './web-data-memory/in-memory-data.service';

// 共享数据
import { DaikuanService } from './daikuan.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// nz-date-picker 的部分 locale 来自于 Angular 自身的国际化支持，需要在 main.ts文件中 引入相应的 Angular 语言包

// szj-study angular's kind of function
import { szjIndex } from './study/index';
import { SzjCom } from './study/com/com';
import { SzjCom2 } from './study/com/com-2';
import { SzjRouter1 } from './study/router1';
import { SzjRouter2 } from './study/router2';
import { directives } from './study/directives/directive';
import { importComs } from './study/comMgr';
import { pipes } from './study/pipes/index';
import { AstronautComponent } from './study/com/astronaut.component';
import { AppCountdownTimerComponent } from './study/com/app-countdown-timer/app-countdown-timer.component';
import { AppCountdownTimerComponent2 } from './study/com/app-countdown-timer/app-countdown-timer.component2';
import { PopupService } from './study/popup/popup.service';

// 组件
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from '../router/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './pages/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavleftComponent } from './components/navleft/navleft.component';

import { HomeComponent } from './pages/aa-home/home.component';
import { FastComponent } from './pages/aa-fast/fast.component';
import { ListComponent } from './pages/aa-list/list.component';
import { CounselComponent } from './pages/aa-counsel/counsel.component';
import { AppdownComponent } from './pages/aa-appdown/appdown.component';
import { AboutUsComponent } from './pages/aa-about-us/about-us.component';
import { DetailComponent } from './pages/aa-detail/detail.component';
import { NavtopComponent } from './pages/navtop/navtop.component';
import { PipesPipe } from './study/utils/pipes.pipe';
import { PopupComponent } from './study/popup/popup.component';

registerLocaleData(zh);

@NgModule({
  declarations: [// 组件声明的地方
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,

    // example
    szjIndex,
    SzjCom,
    SzjCom2,
    SzjRouter1,
    SzjRouter2,
    ...importComs,
    ...directives,
    ...pipes,
    AstronautComponent,
    AppCountdownTimerComponent,
    AppCountdownTimerComponent2,

    // public component
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavleftComponent,
    // tong's component
    FastComponent,
    ListComponent,
    CounselComponent,
    AppdownComponent,
    AboutUsComponent,
    DetailComponent,
    NavtopComponent,
    PipesPipe,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),// NG-ZORRO设定
    BrowserAnimationsModule, // 注册动画模块
    // forRoot() 配置方法接受一个 InMemoryDataService 类（初期的内存数据库）作为参数。
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
  ],
  providers: [
    PopupService,
    // 解决服务器上刷新404的问题,这样路径中会有# ,很难看
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
    /** 配置 ng-zorro-antd 国际化 **/
    DaikuanService, { provide: NZ_I18N, useValue: zh_CN }
  ],
  entryComponents: [
    PopupComponent,
    ...importComs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
