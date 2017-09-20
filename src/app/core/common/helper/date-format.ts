import * as moment from 'moment';

export class DateFormat {

  /**
   * Convert date local to date utc by format date
   */
  static convertLocalToUTC(date: string, format: string): string {
    return moment(date).utc().format(format);
  }

  /**
   * Convert date utc to date local by format date
   */
  static convertUTCToLocal(date: string, format: string): string {
    return moment.utc(date).format(format);
  }

}
