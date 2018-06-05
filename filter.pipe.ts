import { Pipe, PipeTransform } from "@angular/core";
/**
 * @author yhauxell@gmail.com
 */
@Pipe({
    name: "filter",
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                if (item[field].toLowerCase().indexOf(conditions[field].toLowerCase()) == -1) {
                    return false;
                }
            }
            return true;
        });
    }
}