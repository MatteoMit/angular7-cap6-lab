import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SimpleCounter1 } from "./simple-counter1/simple-counter1.component";
import { SimpleCounter2 } from "./simple-counter2/simple-counter2.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SimpleCounter1, SimpleCounter2],
  bootstrap: [AppComponent]
})
export class AppModule {}
