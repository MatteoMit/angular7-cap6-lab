import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  caricamento = 0;

  ngOnInit(): void {
    this.updateProgress(10);
  }
  updateProgress(value: number): void {
    if (this.caricamento >= 100 || value === 0) {
      return;
    }
    const delta = 100 - this.caricamento;
    if (value > delta) {
      value = delta;
    }
    setTimeout(() => {
      this.caricamento += value;
      this.updateProgress(value);
    }, 1000);
  }
}
