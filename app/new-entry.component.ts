import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
  <h1>New Meal</h1>
    <div>
      <label>Meal Name:</label>
      <input #newMealName><br>
      <label>Entry Details:</label>
      <input #newDetails><br>
    </div>
    <div>
      <label>Total Number Of Calories:</label>
      <input #newCalories><br>
      <label>Entry ID:</label>
      <input #newId><br>
      <button (click)="addClicked(newMealName.value, newDetails.value, newCalories.value, newId.value);
      newMealName.value='';
      newDetails.value='';
      newCalories.value='';
      newId.value='';
      ">Add Entry</button>
    </div>
  `
})

export class NewEntryComponent {
  @Output() newEntrySender = new EventEmitter();
  addClicked(mealName: string, details: string, calories: number, id: number  ) {
    var newEntryToAdd: Entry = new Entry(mealName, details, calories, id);
    this.newEntrySender.emit(newEntryToAdd);
  }
}
