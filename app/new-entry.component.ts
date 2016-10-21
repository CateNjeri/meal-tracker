import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
  `
})

export class NewEntryComponent {
  @Output() newEntrySender = new EventEmitter();
  addClicked(mealName: string, details: string, id: number, calories: number ) {
    var newEntryToAdd: Entry = new Entry(mealName, details, id, calories);
    this.newEntrySender.emit(newEntryToAdd);
  }
}
