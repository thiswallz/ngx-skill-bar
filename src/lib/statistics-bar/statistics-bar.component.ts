import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "statistics-bar",
  templateUrl: "./statistics-bar.component.html",
  styleUrls: ["./statistics-bar.component.css"]
})
export class StatisticsBarComponent implements OnInit {
  @Input() width: number = 0;
  @Input() bgColor: string = "#644d4d";
  @Input() color: string = "white";
  @Input() barWidth: number = 40;

  constructor() {}

  ngOnInit() {}
}
