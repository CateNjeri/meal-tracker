import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker 3.o</h1>
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
      new Entry("Zucchini Noodles", "Zucchini peeled into strings and topped with marinara sauce", 700, 1),
      new Entry("Apple", "A granny smith apple from New Seasons", 70, 2),
      new Entry("Chocolate Pumpkin Shake", "Got it as a pick me up during my code review from The Original", 800, 3),
      new Entry("Big Salad", "My regular daily huge salad with mixed greens, walnuts, chia seeds, avacado, oil, vinegar, and salt", 230, 4)
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
