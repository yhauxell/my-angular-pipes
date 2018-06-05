import { Pipe, PipeTransform } from '@angular/core';
/**
 * @author yhauxell@gmail.com
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, size?: number): any {
    if (value) {
      return value.substr(0, size || 2);
    }
  }

}
