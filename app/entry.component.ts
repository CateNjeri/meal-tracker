import { Component, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-display',
  template: `
  <div>
    <label>~&nbsp;Name: &nbsp;&nbsp;{{ entry.mealName }}</label><br>
    <label>~&nbsp;Details: &nbsp;&nbsp;{{ entry.details }}</label><br>
    <label>~&nbsp;Calories: &nbsp;&nbsp;{{ entry.calories }}</label><br>
    <label>~&nbsp;Meal ID: &nbsp;&nbsp;{{ entry.id }}</label><br>
  </div>
  `
})
export class EntryComponent {
  @Input() entry: Entry;
}
