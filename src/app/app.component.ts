import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  progress = 0;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.progress = 20;
    }, 500);
  }
}
