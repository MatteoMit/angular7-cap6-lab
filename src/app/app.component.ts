import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <simple-counter1
      title="Componente 1"
      [counterSimple1]="counter1"
      (update1)="updateCounter1($event)"
    ></simple-counter1>
    <br>
    <p> ------ ------ ------ ------ ----- </p>
    <simple-counter2
      title="Componente 2"
      [counterSimple2]="counter2"
      (update2)="updateCounter2($event)"
    ></simple-counter2>
  `
})
export class AppComponent {

  counter1 = 0;
  counter2 = 0;

  updateCounter1 (value: number){
    this.counter2 += value;
  }
  updateCounter2 (value: number){
    this.counter1 += value;
  }

}
