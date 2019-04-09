import { Component,OnInit, Input } from '@angular/core';


@Component({
  selector: 'my-child',
  template: "<h2>{{child_title}}</h2>",
  inputs: ['parent_title']
})

export class ChildComponent implements OnInit {
  parent_title: String;
  child_title: String;

  ngOnInit(): void {
    this.child_title = this.parent_title + ";updated by Child";
  }
}
