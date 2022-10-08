import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    intervalSub:any;
    ngOnInit(){
        this.intervalSub=setInterval(()=>{
            console.log("Hello fromn ngOnInit");
        }, 1000);
    }
    ngOnDestroy(){
        if (this.intervalSub){
            clearInterval(this.intervalSub);
        }
    }
}
