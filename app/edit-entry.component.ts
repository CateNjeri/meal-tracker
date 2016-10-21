import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'edit-entry',
  template: `
    <div *ngIf="childSelectedEntry">
      <h1>Edit Entry</h1>
      <div>
        <label>Edit Meal Name:</label>
        <input [(ngModel)]="childSelectedEntry.mealName">
        <label>Edit Meal Details:</label>
        <input [(ngModel)]="childSelectedEntry.details">
      </div>
      <div>
        <label>Edit Total Meal Calories:</label>
        <input [(ngModel)]="childSelectedEntry.calories">
        <label>Edit Meal Id Number:</label>
        <input [(ngModel)]="childSelectedEntry.id">
        <button (click)="doneClicked()">Submit Edits</button>
      </div>
    </div>
  `
})

export class EditEntryComponent {
  @Input() childSelectedEntry: Entry;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
