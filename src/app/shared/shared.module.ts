import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule,MatSidenavModule, MatTooltipModule ],
  exports: [MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule,MatSidenavModule, MatTooltipModule ],
})
export class SharedModule {}
