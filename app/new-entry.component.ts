import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
  <h1>New Meal Entry</h1>
    <div>
      <label>Meal Name:</label>
      <input #newMealName><br><br>
      <label>Entry Details:</label>
      <input #newDetails><br><br>
      <label># Of Calories:</label>
      <input #newCalories type="number"><br><br>
      <label>Entry ID:</label>
      <input #newId type="number"><br><br>
      <button (click)="addClicked(newMealName.value, newDetails.value, newCalories.value, newId.value);
      newMealName.value='';
      newDetails.value='';
      newCalories.value='';
      newId.value='';
      " class="pull-right btn-success btn btn-lg">Add Entry</button>
    </div>
  `
})

export class NewEntryComponent {
  @Output() newEntrySender = new EventEmitter();
  addClicked(mealName: string, details: string, calories: number, id: number) {
    var newEntryToAdd: Entry = new Entry(mealName, details, calories, id);
    this.newEntrySender.emit(newEntryToAdd);
  }
}
