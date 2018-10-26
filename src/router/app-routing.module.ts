import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// 导入路由组件
import { HeroesComponent } from '../app/heroes/heroes.component';
import { DashboardComponent }   from '../app/dashboard/dashboard.component';
import { HeroDetailComponent }  from '../app/hero-detail/hero-detail.component';

const routes: Routes = [
  // 添加自定义默认路由,这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由。
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
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
