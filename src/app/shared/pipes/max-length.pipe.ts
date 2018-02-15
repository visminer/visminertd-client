import { Pipe, PipeTransform } from '@angular/core';

/**
 * Limits the number of chars in a string.
 * if the string is longer than the determined max length then 3 dots will be placed at the end of the limited length.
 * Otherwise, the whole string will be showed.
 */
@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

    maxLength = 30;

    transform(value: string, maxLength?: number): string {
        if (!value) {
            return '';
        }

        const limit = maxLength || this.maxLength;

        if (value.length <= limit) {
            return value;
        } else {
            return value.substr(0, limit) + '...';
        }
    }

}
