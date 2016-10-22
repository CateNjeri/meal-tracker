import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from './entry.model';

@Pipe({
  name: "calorie-level",
  pure: false
})

  export class CalorieLevelPipe implements PipeTransform {
    transform(input: Entry[], desiredCalories) {
      var output: Entry[] = [];
      if(desiredCalories !== "all") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 500) {

          }
        }
      }

    }

  }
