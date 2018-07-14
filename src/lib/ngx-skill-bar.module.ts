import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSkillBarComponent } from "./ngx-skill-bar.component";
import { StatisticsBarComponent } from "./statistics-bar/statistics-bar.component";
import { StatisticsListBarComponent } from "./statistics-list-bar/statistics-list-bar.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxSkillBarComponent,
    StatisticsBarComponent,
    StatisticsListBarComponent
  ],
  exports: [NgxSkillBarComponent]
})
export class NgxSkillBarModule {}
