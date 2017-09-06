import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.route';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';
@NgModule({
  declarations: [
    AppComponent,
    Ass1Component,
    Ass2Component,
    Ass3Component,
    Ass4Component
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
