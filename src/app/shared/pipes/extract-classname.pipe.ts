import { Pipe, PipeTransform } from '@angular/core';

/**
 * Extracts the filename from a canonical filepath.
 */
@Pipe({
  name: 'extractClassname'
})
export class ExtractClassnamePipe implements PipeTransform {

  transform(value: any, args?: any) {
    const index = value.lastIndexOf('.');
    if (index === -1) {
        return value;
    } else {
        return value.substring(index + 1);
    }
  }

}
