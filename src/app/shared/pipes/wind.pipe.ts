import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind'
})
export class WindPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + ' Km/h';
  }

}
