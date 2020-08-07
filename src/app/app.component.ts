import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <h3> {{title}} </h3>
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
  title = 'Scambio di informazioni fra componenti adiacenti';
  counter1 = 0;
  counter2 = 1;
}
