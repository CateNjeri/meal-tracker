import { Component, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-display',
  template: `
  <div>
    <label>Name: &nbsp;&nbsp;{{ entry.mealName }}</label><br>
    <label>Details: &nbsp;&nbsp;{{ entry.details }}</label><br>
    <label>Calories: &nbsp;&nbsp;{{ entry.calories }}</label><br>
    <label>Meal ID: &nbsp;&nbsp;{{ entry.id }}</label><br>
  </div>
  `
})
export class EntryComponent {
  @Input() entry: Entry;
}
