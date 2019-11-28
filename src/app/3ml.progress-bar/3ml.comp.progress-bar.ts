import { Component } from "@angular/core";
@Component({
  selector: "simple-progress-bar",
  template: `
    <div class="container">
      <div class="progress" style="width: 20%">20%</div>
    </div>
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
    `
  ]
})
export class ProgressBar {}
