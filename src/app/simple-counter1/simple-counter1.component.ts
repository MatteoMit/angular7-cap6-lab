import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "simple-counter1",
  template: `
    <h2>{{ title }}</h2>
    <div>
      {{ counterSimple1 }}
      <button (click)="onClick($event)">Add +1 a Componente 2</button>
    </div>
  `,
  styles: []
})
export class SimpleCounter1 {
  @Input() title: string;
  @Input() counterSimple1: number;
  /* 
    -- OLD - BUT working! - versione for COUNTER1 
    --
  @Output() update = new EventEmitter<number>();
  onClick(event: MouseEvent) {
    this.update.emit(1);
  */

  @Output() counterSimple1Change = new EventEmitter<number>();
  
  onClick(event: MouseEvent) {
    this.counterSimple1Change.emit(1);
  }
}