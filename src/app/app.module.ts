import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ShowTextComponent } from './workshop2/show-text/show-text.component';
import { TextShowComponent } from './workshop2/text-show/text-show.component';
import { Workshop3Component } from './workshop3/workshop3.component';
import { CalculatorComponent } from './workshop3/calculator/calculator.component';
import { CalendarComponent } from './workshop3/calendar/calendar.component';
import { Workshop4Component } from './workshop4/workshop4.component';
import { Workshop5Component } from './workshop5/workshop5.component';

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
    Workshop2Component,
    ShowTextComponent,
    TextShowComponent,
    Workshop3Component,
    CalculatorComponent,
    CalendarComponent,
    Workshop4Component,
    Workshop5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
