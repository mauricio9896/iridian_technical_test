import { Component, OnInit} from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Selections } from '../../models/event.model';


@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrl: './betslip.component.css',
})
export class BetslipComponent {

  get selectionsHitory(): any[] {
    return this.eventsService.selectionsHitory;
  }

  constructor(private eventsService: EventsService) {}

  deleteSelected(selected : Selections){
    this.eventsService.deleteSelectionHistory(selected)
  }
}
