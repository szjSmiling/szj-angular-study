import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counsel',
  templateUrl: './counsel.component.html',
  styleUrls: ['./counsel.component.css']
})
export class CounselComponent implements OnInit {
  content = [{img:'../../assets/img/sulticon.png',title:'贷款机构那么多，给您一个选择的好机会给您一个选择的好机会',time:'2018-12-04',detail:'贷款机构那么多，谁都想找到一个利息低、放款快、门槛低、额度高的贷款机构，2007年以后，各种贷款机构...',},{img:'../../assets/img/sulticon.png',title:'贷款机构那么多，给您一个选择的好机会给您一个选择的好机会',time:'2018-12-04',detail:'贷款机构那么多，谁都想找到一个利息低、放款快、门槛低、额度高的贷款机构，2007年以后，各种贷款机构...',},{img:'../../assets/img/sulticon.png',title:'贷款机构那么多，给您一个选择的好机会给您一个选择的好机会',time:'2018-12-04',detail:'贷款机构那么多，谁都想找到一个利息低、放款快、门槛低、额度高的贷款机构，2007年以后，各种贷款机构...',},]
  constructor() { }

  ngOnInit() {
  }

}
