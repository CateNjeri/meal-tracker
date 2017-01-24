import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container"  id="bottomMargin">
    <h1>Meal Tracker </h1>
    <entry-list
      [childEntryList]="masterEntryList"
      (clickSender)="showDetails($event)"
    ></entry-list>
    <edit-entry
      [childSelectedEntry]="selectedEntry"
      (doneClickedSender)="finishedEditing()"
    ></edit-entry>
    <new-entry (newEntrySender)="addEntry($event)"></new-entry>
  </div>
  `
})

export class AppComponent {
  public masterEntryList: Entry[] = [
      new Entry("Noodles", "Ordered noodles and meat balls from Anita's kitchen for lunch", 700, 1),
      new Entry("Apple", "Got an apple from kibanda to top my lunch", 70, 2),
      new Entry("Vanilla ice cream", "Got it as a pick me up during my coding", 800, 3),
      new Entry("Salad", "Tried salad with mixed fruits, raisins and carrots from Mama Mboga ", 230, 4)
  ];
  selectedEntry: Entry = null;
  showDetails(clickedEntry: Entry) {
    this.selectedEntry = clickedEntry;
  }
  finishedEditing() {
    this.selectedEntry = null;
  }
  addEntry(newEntryFromChild: Entry) {
   this.masterEntryList.push(newEntryFromChild);
  }
}
