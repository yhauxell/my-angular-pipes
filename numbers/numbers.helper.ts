import { Number2LettersHelper } from './number2letters.helper';
/**
 * @author yhauxell@gmail.com
 */
export class NumbersHelper {
  public static miles(value, with$ = true) {
    if (value != '') {
      value = NumbersHelper.cleanMiles(value);
      return (with$ ? '$' : '') + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return value;
  }

  public static cleanMiles(value) {
    if (!value) { return 0; }
    return Number.parseFloat(
      String(value)
        .replace('$', '')
        .replace(/\./g, ''),
    );
  }

  public static normalize(num: number, miles: boolean = true, mode: string) {
    let sign: any = num > 0;
    if (mode == 'inverted') {
      sign = !sign;
    }
    sign = sign ? '+' : '-';
    let value = Math.abs(num);
    if (miles === true) {
      value = NumbersHelper.miles(value);
    }
    return `${sign} ${value}`;
  }

  public static roundToCL(num) {
    //return Math.round((num -1) * 0.1) / 0.1;
    return Math.round(num); //Hasta que sii valide de esta forma
  }

  public static toLetters(num, dirty) {
    if (dirty) {
      num = NumbersHelper.cleanMiles(num);
    }
    return Number2LettersHelper.toLetters(num);
  }

  public static asPercentage(num) {
    return `${num}%`;
  }

  public static fixedNumber(num, x = 6) {
    if (!num) {
      return 0;
    }
    return Number.parseFloat(Number(num).toFixed(x));
  }
}
