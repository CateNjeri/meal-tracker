import { Component, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
  <h1>New Meal</h1>
    <div>
      <label>Meal Name:</lable>
      <input #newMealName>
      <label>Entry Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Select Calorie Level:</label>
      <select #newCalorieLevel>
        <option selected="selected">optional</option>
        <option>Above 500 Calories</option>
        <option>Below 500 Calories</option>
      </select>
      <label>Total Number Of Calories:</label>
      <input #newCalories>
      <label>Entry ID:</label>
      <input #newId>
      <button (click)="addClicked(newMealName.value, newDetails.value, newCalories.value, newCalorieLevel.value, newId.value);
      newMealName.value='';
      newDetails.value='';
      newCalories.value='';
      newCalorieLevel.value='';
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
