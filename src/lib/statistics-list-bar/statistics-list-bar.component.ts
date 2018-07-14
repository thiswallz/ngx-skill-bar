import { Component, OnInit, Input } from "@angular/core";
import { Bar } from "../bar.model";

const DEFAULT_PADDING: number = 2;

@Component({
  selector: "statistics-list-bar",
  templateUrl: "./statistics-list-bar.component.html",
  styleUrls: ["./statistics-list-bar.component.css"]
})
export class StatisticsListBarComponent implements OnInit {
  @Input() bars: Bar[] = [];
  @Input() showFigures: boolean = false;
  @Input() percentage: number = 0;
  @Input() bgColor: string;
  @Input() color: string;
  @Input() barWidth: number;
  @Input() full: boolean = false;
  padding: number = DEFAULT_PADDING;

  constructor() {}

  ngOnInit() {
    if (this.full == true) {
      this.padding = 0;
    } else {
      this.padding = DEFAULT_PADDING;
    }
  }
}
