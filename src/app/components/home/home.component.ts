import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showFiller = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
