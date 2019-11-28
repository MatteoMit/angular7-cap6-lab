import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProgressBar } from './3ml.progress-bar/3ml.comp.progress-bar';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProgressBar ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
