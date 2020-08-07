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
  @Output() update1 = new EventEmitter<number>();
  
  onClick(event: MouseEvent) {
    this.update1.emit(1);
  }
}