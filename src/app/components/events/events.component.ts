import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {

  public events!: Events[];

  constructor(private eventsServices: EventsService) {}

  ngOnInit(): void {
    this.eventsServices.getEvents().subscribe((res: Events[])=>{
      this.events = res;
    });
  }
}
