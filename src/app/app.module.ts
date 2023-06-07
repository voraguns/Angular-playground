import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubComponent1Component } from './main-component/sub-component1/sub-component1.component';
import { SubComponent2Component } from './main-component/sub-component2/sub-component2.component';
import { SubComponent3Component } from './main-component/sub-component3/sub-component3.component';
import { SubChildComponent1Component } from './main-component/sub-component1/sub-child-component1/sub-child-component1.component';
import { SubChildComponent2Component } from './main-component/sub-component1/sub-child-component2/sub-child-component2.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { Workshop2Component } from './workshop2/workshop2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SubComponent1Component,
    SubChildComponent1Component,
    SubChildComponent2Component,
    SubComponent2Component,
    SubComponent3Component,
    MainComponentComponent,
    Workshop2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
