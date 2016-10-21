import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <label>Sort By Calorie Level</label>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All Entries</option>
    <option value="above500">Entries Above 500 calories</option>
    <option value="below500">Entries Below 500 calories</option>
  </select>
  <div *ngFor="let currentEntry of childEntryList | calorie-level:desiredCalories">
    <entry-display [entry]="currentEntry"></entry-display>
    <button (click)="editButtonHasBeenClicked(currentEntry)">Edit Entry</button>
  </div>
  `
})

export class EntryListComponent {
  @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter();
  public desiredCalories: string = "Show All Entries";
  onChange(optionFromMenu) {
   this.desiredCalories = optionFromMenu;
   console.log(this.desiredCalories);
  }
  editButtonHasBeenClicked(entryToEdit: Entry) {
   this.clickSender.emit(entryToEdit);
  }
}
