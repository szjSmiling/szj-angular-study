import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer2',
  templateUrl: './app-countdown-timer.component2.html',
  styleUrls: ['./app-countdown-timer.component2.scss']
})
export class AppCountdownTimerComponent2 implements OnInit {

  message: string = "";
  intervalId: number = 0;
  seconds: number = 11;
  clearTimer() { clearInterval(this.intervalId); }

  constructor() {  }

  ngOnInit() { this.start(); }

  ngOnDestroy() { this.clearTimer(); }

  start(){ this.countDown(); }
  stop(){
    this.clearTimer()
    this.message = `Holding at T-${this.seconds} seconds.`;
  }
  private countDown() {
    this.clearTimer()
    this.intervalId = window.setInterval(()=>{
      this.seconds -= 1
      if(this.seconds === 0){
        this.message = "Blast off!"
      }else{
        if(this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting.`;
      }
    }, 1000)
  }
}
