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
    this._selectionsHitory.push(selection);
    this.saveSelectionHistory();
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
