import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  progress = 0;
  ngOnInit(): void {
    this.updateProgress(6);
  }
  updateProgress(value: number): void {
    if (this.progress >= 100 || value === 0) {
      return;
    }
    const delta = 100 - this.progress;
    if (value > delta) {
      value = delta;
    }
    setTimeout(() => {
      this.progress += value;
      this.updateProgress(value);
    }, 200);
  }
}
