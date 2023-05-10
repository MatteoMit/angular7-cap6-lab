import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  avanzamento = 0;

  ngOnInit(): void {
    this.updateProgress(10);
  }
  updateProgress(value: number): void {
    if (this.avanzamento >= 100 || value === 0) {
      return;
    }
    const delta = 100 - this.avanzamento;
    if (value > delta) {
      value = delta;
    }
    setTimeout(() => {
      this.avanzamento += value;
      this.updateProgress(value);
    }, 1000);
  }
}
