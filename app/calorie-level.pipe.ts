import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from './entry.model';

@Pipe({
  name: "calorie-level",
  pure: false
})

  export class CalorieLevelPipe implements PipeTransform {
    transform(input: Entry[], desiredCalories) {
    
    }

  }
