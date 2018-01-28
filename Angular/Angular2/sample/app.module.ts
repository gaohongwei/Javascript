===========  app/app.module.ts ===========
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }


Every app requires at least one module, the root module, that we call AppModule by convention.
We're passing metadata to the NgModule decorator function:
--imports - imports needed modules
--declarations - components and directives that belong to this module.
--bootstrap - identifies the root component that Angular should bootstrap when it starts the application.

We import our lone app.component.ts and add it to both the declarations and bootstrap arrays.

Every Angular app has at least one module, the root module, conventionally named AppModule.
An Angular module, whether a root or feature, is a class with an @NgModule decorator.
NgModule is a decorator function that takes a single metadata object 
whose properties describe the module. The most important are
declarations - the view classes that belong to this module. 
Angular has three kinds of view classes: components, directives and pipes.

exports - subset of declarations that should be visible and usable in 
the component templates of other modules.

imports - other modules whose exported classes are needed by component 
templates declared in this module.

providers creators of services that this module contributes to the global collection of services; 
they become accessible in all parts of the app.

bootstrap - identifies the main application view, called the root component, 
that hosts all other app views. Only the root module should set this bootstrap property.

--------- Sample ---------
app/app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


