import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  curProgressVal = 0;
  ngOnInit(): void {}
  updateProgress(value: number): void {
    this.curProgressVal += value;
  }
}
