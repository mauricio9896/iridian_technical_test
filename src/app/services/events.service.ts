import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Events, Selections } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private _selectionsHitory: Selections[] = [];

  get selectionsHitory(): Selections[] {
    return this._selectionsHitory;
  }

  constructor(private http: HttpClient) {
    this.loadSelectionHistory();
  }

  getEvents(): Observable<Events[]> {
    const url: string = 'assets/data.json';
    return this.http.get<Events[]>(url);
  }

  addSelectionHistory(selection: Selections): void {
    if (this._selectionsHitory.includes(selection)) return;
    this.getEvents().subscribe((events: Events[]) => {
      const id_market = this.marketFind(selection.id, events);
      if ( id_market ){
        if( this.marketSome(id_market, events)) return
        this._selectionsHitory.push(selection);
        this.saveSelectionHistory();
      }
    });
  }

  private marketSome( id: string, events: Events[] ){
    for (const selection of this._selectionsHitory) {
      const id_market = this.marketFind(selection.id, events);
      if (id_market == id) {
        return true;
      }
    }
    return false;
  }

  private marketFind(id: string, events: Events[]): string | null{
    if (events.length > 0) {
      for (const event of events) {
        for (const market of event.markets) {
          for (const selection of market.selections) {
            if (selection.id === id) {
              return market.id
            }
          }
        }
      }
    }
    return null
  }

  deleteSelectionHistory(selection: Selections): void {
    const index = this._selectionsHitory.findIndex(
      (selected) => selected.id === selection.id
    );
    if (index > -1) {
      this._selectionsHitory.splice(index, 1);
    }
    this.saveSelectionHistory();
  }

  private saveSelectionHistory(): void {
    localStorage.setItem(
      'SelectionHistory',
      JSON.stringify(this._selectionsHitory)
    );
  }

  private loadSelectionHistory(): void {
    if (!localStorage.getItem('SelectionHistory')) return;
    this._selectionsHitory = JSON.parse(
      localStorage.getItem('SelectionHistory')!
    );
  }
}
