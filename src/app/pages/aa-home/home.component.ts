import { Component, OnInit } from '@angular/core';
import { DaikuanService } from '../../daikuan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home_list:any;
  public home_list1:any;
  public list:any;
  constructor(public DaikuanService:DaikuanService,private router:Router) { }

  ngOnInit() {
     var number = this.DaikuanService.getnumber()
     this.DaikuanService.getHomeInfo().subscribe( res=> {
        // console.log(res)
        this.home_list = res['list2']
        this.home_list1 = res['list3']
        this.list = res['list4']
     })
  }
  Godetail(){
    this.router.navigate(['/detail'])
  }

}
