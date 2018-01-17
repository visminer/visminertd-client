import { Pipe, PipeTransform } from '@angular/core';

/**
 * Extracts the filename from a canonical filepath.
 */
@Pipe({
  name: 'extractFilename'
})
export class ExtractFilenamePipe implements PipeTransform {

  transform(value: any, args?: any) {
    if (value.includes('/')) {
      return value.substring(value.lastIndexOf('/') + 1, value.lastIndexOf('.'));
    } else {
      return value.substring(0, value.lastIndexOf('.'));
    }
  }

}
