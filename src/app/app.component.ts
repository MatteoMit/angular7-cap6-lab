import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <simple-counter
      title="Componente 1"
      [counter]="counter1"
      (update)="counter2 = counter2 + $event"
    ></simple-counter>
    <simple-counter
      title="Componente 2"
      [counter]="counter2"
      (update)="counter1 = counter1 + $event"
    ></simple-counter>
  `
})
export class AppComponent {
  counter1 = 0;
  counter2 = 1;
}
