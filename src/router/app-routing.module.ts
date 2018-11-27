import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// 导入路由组件,官网例子
import { HeroesComponent } from '../app/heroes/heroes.component';
import { DashboardComponent }   from '../app/dashboard/dashboard.component';
import { HeroDetailComponent }  from '../app/hero-detail/hero-detail.component';
// 自己的例子
import { HomeComponent } from '../app/pages/aa-home/home.component';
import { FastComponent } from '../app/pages/aa-fast/fast.component';
import { ListComponent } from '../app/pages/aa-list/list.component';
import { CounselComponent } from '../app/pages/aa-counsel/counsel.component';
import { AppdownComponent } from '../app/pages/aa-appdown/appdown.component';
import { AboutUsComponent } from '../app/pages/aa-about-us/about-us.component';
import { DetailComponent } from '../app/pages/aa-detail/detail.component';

const routes: Routes = [
  // 添加自定义默认路由,这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由。
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'fast', component: FastComponent,},
  {path: 'list', component: ListComponent,},
  {path: 'counsel', component: CounselComponent,},
  {path: 'appdown', component: AppdownComponent,},
  {path: 'aboutus', component: AboutUsComponent,},
  {path: 'detail', component: DetailComponent,},

  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), //初始化路由器，并让它开始监听浏览器中的地址变化。
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
