import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaikuanService {
  public slidernumber = 0;
  constructor(private http: HttpClient) { }

  getnumber(): number {
    return this.slidernumber
  }
  // 本地json文件请求
  getHomeInfo(){
    return this.http.get("../assets/list.json")
  }

}
