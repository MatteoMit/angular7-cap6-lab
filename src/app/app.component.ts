import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  progressione = 0;
  ngOnInit(): void {}
  updateProgress(value: number): void {
    this.progressione += value;
  }
}
