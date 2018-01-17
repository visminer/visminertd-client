import { Pipe, PipeTransform } from '@angular/core';
/**
 * Removes unwanted characters from a string.
 */
@Pipe({
  name: 'removeChar'
})
export class RemoveCharPipe implements PipeTransform {

  unwantedChar = '_';
  replaceChar = ' ';

  transform(value: any, unwantedChar?: string, replaceChar?: string): any {
    unwantedChar = unwantedChar || this.unwantedChar;
    replaceChar = replaceChar || this.replaceChar;

    let result = '';

    for (let i = 0; i < value.length; i++) {
      if (value.charAt(i) === unwantedChar) {
        result = result.concat(replaceChar);
      } else {
        result = result.concat(value.charAt(i));
      }
    }

    return result;
  }

}
