import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <h3> {{title}} </h3>
    <!--
        <simple-counter1 
          title = "Componente 1"
          [counterSimple1] = "counter1"
          (update1) = "updadateCounter1($event)">
        </simple-counter1>
    -->

    <!-- 2-WAY BINDING for "simple-counter1" -->
    <simple-counter1
      title="Componente 1 (2-way binding)"
      [(counterSimple1)] = "counter1">
      (update1)="updateCounter1($event)"
    ></simple-counter1>
    <br />
    <p>------ ------ ------ ------ -----</p>

    <simple-counter2
      title="Componente 2"
      [counterSimple2]="counter2"
      (update2)="updateCounter2($event)"
    ></simple-counter2>
  `
})
export class AppComponent {
  title = "Scambio di informazioni fra componenti adiacenti";
  private _counter1 = 0;
  counter2 = 0;

  /* 
  --OLD - BUT working! - version for "updadateCounter1" method  
  --
  updadateCounter1 (value: number){
    this.counter2 += value;
  }
*/
  // NEW version for COUNTER1: "2-way binding"
  get counter1(): number {
    console.log("get counter, counter1: " + this._counter1);
    return this._counter1;
  }
  set counter1(value: number) {
    this.counter2 += value;
    console.log("set counter, counter2: " + this.counter2);
  }

  
  // Il "2-way binding" non è stato VOLUTAMENTE fatto sul componente SIMPLE-COUNTER2
  updateCounter2(value: number) {
    this.counter1 += value;
  }
}
