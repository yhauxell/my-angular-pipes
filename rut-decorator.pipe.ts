import { Pipe, PipeTransform } from '@angular/core';
/**
 * @author yhauxell@gmail.com
 */
@Pipe({
  name: 'rutDecorator'
})
export class RutDecoratorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? this.format(value,  true) : value;
  }

  format(value, useThousandsSeparator) {
    var rutAndDv = this.splitRutAndDv(value);
    var cRut = rutAndDv[0]; var cDv = rutAndDv[1];
    if(!(cRut && cDv)) { return cRut || value; }
    var rutF = "";
    var thousandsSeparator = useThousandsSeparator ? "." : "";
    while(cRut.length > 3) {
      rutF = thousandsSeparator + cRut.substr(cRut.length - 3) + rutF;
      cRut = cRut.substring(0, cRut.length - 3);
    }
    return cRut + rutF + "-" + cDv;
  }

  splitRutAndDv(rut) {
    var cValue = this.clearFormat(rut);
    if(cValue.length === 0) { return [null, null]; }
    if(cValue.length === 1) { return [cValue, null]; }
    var cDv = cValue.charAt(cValue.length - 1);
    var cRut = cValue.substring(0, cValue.length - 1);
    return [cRut, cDv];
  }

  clearFormat(value) {
    return value.replace(/[\.\-]/g, "");
  }


}
