import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "simple-counter2",
  template: `
    <h2>{{ title }}</h2>
    <div>
      {{ counterSimple2 }}
      <button (click)="onClick($event)">Add +1 a Componente 1</button>
    </div>
  `,
  styles: []
})
export class SimpleCounter2 {
  @Input() title: string;
  @Input() counterSimple2: number;
  @Output() update2 = new EventEmitter<number>();
  
  onClick(event: MouseEvent) {
    this.update2.emit(1);
  }
}
