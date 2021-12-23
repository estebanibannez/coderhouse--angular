import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
  ],
})
export class MaterialModule {}
