import { Component } from '@angular/core';
import { ChildComponent } from 'app/src/child.component';

@Component({
  selector: 'my-parent',
  template:`
    <div>
      <h1>I'm the Parent component</h1>
      <my-child [parent_title]="parent_data"></my-child>
    </div>
  `,
  directives: [ChildComponent]
})
export class ParentComponent {
  parent_data:String = "Passed from Parent";
 }
