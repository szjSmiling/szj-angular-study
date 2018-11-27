import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css']
})
export class NavtopComponent implements OnInit {
  list = [
    {name:'首页',select:true},
    {name:'贷款大全',select:false},
    {name:'必下款',select:false},
    {name:'贷款资讯',select:false},
    {name:'应用下载',select:false},
    {name:'关于我们',select:false}
  ]
  constructor(private router: Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let index = this.activatedRoute.snapshot.queryParams['index']
    if(index){
      for(let j=0;j<this.list.length;j++){
        if(index==j){
          this.list[j].select = true
        }else{
          this.list[j].select = false
        }
      }
    }
  }
  Goindex(i){
    if(i==0){
      this.router.navigate(['/home'],{queryParams:{index:i}})
    }else if(i==1){
      this.router.navigate(['/list'],{queryParams:{index:i}})
    }else if(i==2){
      this.router.navigate(['/fast'],{queryParams:{index:i}})
    }else if(i==3){
      this.router.navigate(['/counsel'],{queryParams:{index:i}})
    }else if(i==4){
      this.router.navigate(['/appdown'],{queryParams:{index:i}})
    }else if(i==5){
      this.router.navigate(['/aboutus'],{queryParams:{index:i}})
    }

  }

}
