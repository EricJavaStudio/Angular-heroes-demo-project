import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, input: any) {
    if (input && input != ' ') {
      input = input.toLowerCase();
      return value.filter(x => x.heroName.toLowerCase().indexOf(input) > -1);
    }
    else
      return value;
  }
}