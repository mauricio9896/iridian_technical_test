import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Market, Selections } from '../../models/event.model';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.css',
})
export class MarketComponent {
  @Input() market!: Market;

  constructor(private eventsService: EventsService) {}

  addBetslip(selection: Selections): void {
    if (this.selectedOption(selection.id)){
      this.eventsService.deleteSelectionHistory(selection);
    }else{
      this.eventsService.addSelectionHistory(selection);
    }
  }

  selectedOption(id: string): boolean {
    const state = this.eventsService.selectionsHitory.find(
      (selected) => selected.id === id
    );
    if (state) return true;
    return false;
  }
}
