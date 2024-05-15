import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Events } from '../../models/event.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() dataEvent !: Events;
}
