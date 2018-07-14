import { Component, OnInit, Input } from "@angular/core";
import { Bar } from "./bar.model";

@Component({
  selector: "ngx-skill-bar",
  template: `
    <statistics-list-bar [full]="full" [barWidth]="barWidth" [showFigures]="showFigures" [percentage]="percentage" [bars]="bars" [bgColor]="bgColor" [color]="color"></statistics-list-bar>
  `,
  styles: []
})
export class NgxSkillBarComponent implements OnInit {
  @Input() percentage: number = 0;
  @Input() numberOfBars = 5;
  @Input() showFigures: boolean;
  @Input() bgColor: string;
  @Input() color: string;
  @Input() barWidth: number;
  @Input() full: boolean;

  standarWidthBar: number = 20;
  bars: Bar[];

  constructor() {}

  ngOnInit() {
    this.standarWidthBar = 100 / this.numberOfBars;
    this.bars = [...this.generateLine()];
  }

  generateLine() {
    let bars: Bar[] = [];
    for (let i = 1; i <= this.numberOfBars; i++) {
      bars = [...bars, new Bar(this.calculateBar(i))];
    }
    return bars;
  }

  calculateBar(indexBar: number): number {
    const substraction =
      this.percentage - (indexBar - 1) * this.standarWidthBar;
    if (this.percentage >= indexBar * this.standarWidthBar) {
      return 100;
    } else if (substraction > 0) {
      return (substraction * 100) / this.standarWidthBar;
    }
    return 0;
  }
}
