import { Component, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-display',
  template:
  <div>
    <label>{{ entry.mealName }}</label><br>
    <label>{{ entry.details }}</label><br>
    <label>{{ entry.calories }}</label><br>
    <label>{{ entry.id }}</label><hr>
  </div>
  `
})
export class EntryComponent {
  @Input() entry: Entry;
}
