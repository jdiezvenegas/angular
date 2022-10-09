import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
  /*styles: ['h2 {color: blue}']*/
})
export class ChildComponent implements OnInit {
@Input() childMessage: string
  constructor() {
      this.childMessage="Hi!";
 }
  ngOnInit(): void {
  }

}
