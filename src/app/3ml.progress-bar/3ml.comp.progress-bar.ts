import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "simple-progress-bar",
  template: `
    <div class="container">
      <div class="progress" [style.width.%]="progress">{{ progress }}%</div>
    </div>
    <button (click)="onClick($event)">+{{ increment }}</button>
  `,
  styles: [
    `
      .container {
        background-color: #ededed;
        width: 400px;
        border-radius: 24px;
        position: relative;
        margin: 20px auto;
      }
      .progress {
        background-color: #10aded;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        border-radius: inherit;
        transition: width 0.5s ease-out;
      }
      button {
        color: white;
        background-color: darkseagreen;
        border: none;
        border-radius: 2em;
        padding: 1em 2em;
        font-size: 0.8em;
        transform: scale(1);
        outline: none;
        cursor: pointer;
      }
      button:focus {
        background-color: rgb(108, 161, 108);
        transform: scale(1.05);
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
      }
      button:active {
        background-color: rgb(100, 148, 100);
        transform: scale(0.8);
        box-shadow: none;
      }
    `
  ]
})
export class ProgressBarComponent {
  @Input() progress: number;
  @Output() progressChange = new EventEmitter<number>();
  private increment = 15;
  private disabled = false;
  onClick(event) {
    const delta = 100 - this.progress;
    if (delta > this.increment) {
      this.progress += this.increment;
    } else {
      this.progress += delta;
    }
    this.progressChange.emit(this.progress);
  }
}
