import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../../herolist/hero';
import { Title } from '../../herolist/titlelist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public route: ActivatedRoute) { }

  title = Title
  selectedTitle: Hero;
  onSelect(title: Hero): void{
    this.selectedTitle = title;
    this.title.forEach((e, i)=>{
      if(title.id == i){
        e.flag = true;
      }else{
        e.flag = false;
      }
    })
    if(title.id == 0){
      this.router.navigate(['/home'],{queryParams:{ index: title.id}})
    }else if(title.id == 1){
      this.router.navigate(['/list'],{queryParams:{ index: title.id}})
    }else if(title.id == 2){
      this.router.navigate(['/fast'],{queryParams:{ index: title.id}})
    }else if(title.id == 3){
      this.router.navigate(['/counsel'],{queryParams:{ index: title.id}})
    }else if(title.id == 4){
      this.router.navigate(['/appdown'],{queryParams:{ index: title.id}})
    }
  }

  ngOnInit() {
    let index = this.route.snapshot.queryParams['index']
    console.log(index)
  }

}
