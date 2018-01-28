import { Component } from '@angular/core';
import { ParentComponent } from 'app/src/parent.component';

@Component({
  selector: 'my-app',
  template: "First App Sample<my-parent></my-parent>",
  directives: [ParentComponent]
})
export class AppComponent { }
