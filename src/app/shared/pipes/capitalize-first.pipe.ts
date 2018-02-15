import { Pipe, PipeTransform } from '@angular/core';

/**
 * Capitalizes the first letter of each word.
 */
@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) {
        return '';
    }

    let result = '';
    for (let part of value.split(' ')) {
        result += part.charAt(0).toUpperCase();
        result += part.length > 1 ? part.substring(1).toLowerCase() + ' ' : ' ';
    }

    return result;
  }

}
