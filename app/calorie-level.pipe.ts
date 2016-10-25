import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from './entry.model';

@Pipe({
  name: "calorieLevel",
  pure: false
})

export class CalorieLevelPipe implements PipeTransform {
  transform(input: Entry[], desiredCalories) {
    var output: Entry[] = [];
    if(desiredCalories === "above500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "below500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
