import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centigrade'
})
export class CentigradePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + ' °C';
  }

}
