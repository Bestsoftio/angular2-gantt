import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GanttModule } from './gantt/gantt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
