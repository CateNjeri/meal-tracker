import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <new-entry (newEntrySender)="addEntry($event)"></new-task>
  </div>
  `
})

export class AppComponent {

}
