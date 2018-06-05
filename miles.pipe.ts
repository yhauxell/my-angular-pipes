import {Pipe, PipeTransform} from '@angular/core';
import {NumbersHelper} from './numbers/numbers.helper';
/**
 * @author yhauxell@gmail.com
 */
@Pipe({
    name: 'miles'
})
export class MilesPipe implements PipeTransform {

    transform(value: any, args: any): any {
        return NumbersHelper.miles(value, args);
    }
}