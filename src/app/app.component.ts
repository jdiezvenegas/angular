import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title="Hello World!";
    getMin(a:any ,b:any){
        if (a>b){
            return b;
        }
            return a;
    }
}
