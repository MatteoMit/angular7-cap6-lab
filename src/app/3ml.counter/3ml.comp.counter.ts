import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "simple-counter",
  template: `
    <h2>{{ title }}</h2>
    <div>
      {{ counter }}
      <button (click)="onClick($event)">Emetti evento</button>
    </div>
  `,
  styles: []
})
export class Counter {
  @Input() title: string;
  @Input() counter: number;
  @Output() update = new EventEmitter<number>();
  onClick(event: MouseEvent) {
    this.update.emit(1);
  }
}
