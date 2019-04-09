=========== ngIf, click, ngModel app/app.component.ts  ===========
import { Component } from '@angular/core';
import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 (click) = 'click_me()' >Hello {{contact.fname}} {{contact.lname}}</h1>
    <div *ngIf="showDetail===true">
      <input [(ngModel)]="contact.lname" type='text'><br>
      <input [(ngModel)]="contact.fname" type='text'><br>
      Last name : {{contact.lname}} <br>
      First name : {{contact.fname}} <br>
    </div>
  `,
})
export class AppComponent {
  public contact = {
    lname: 'wei',
    fname: 'kevin'
  };
  public showDetail = false;
  click_me() {
    this.showDetail = !this.showDetail;
  }
}
 =========== ngFor app/app.component.ts  ===========
 import {Component} from 'angular2/core';
@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="#contact of contacts" (click)="click_me(contact)">
        {{contact.fname}} {{contact.lname}}
      </li>
    </ul>
    <div >
      Last name : {{contact.lname}} <br>
      First name : {{contact.fname}} <br>
    </div>
  `,
})
export class AppComponent {
  public contacts = [
    {lname: 'wei',fname: 'kevin'},
    {lname: 'wei',fname: 'Jeff'},
    {lname: 'wei',fname: 'Justin'}
  ];

  public contact = {};
  click_me(contact) {
    this.contact = contact;
  }
}
