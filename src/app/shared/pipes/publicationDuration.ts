/**
 * @classdesc Publication pipe
 * @author Melo
 * @version 1.0.0
 * @copyright Melo 2019
 * @name PublicationDurationPipe
 */

import { Pipe, PipeTransform } from '@angular/core';

/*
 * Make the difference between to dates to return when it has been published.
 * Usage:
 *   publicationDate | publicationDuration:actualDate
 * Example:
 *   {{ Tue Mar 20 2018 07:13:19   | publicationDuration:Fri Mar 17 2018 07:13:19  }}
 *   formats to: Publie il y'a 3 jours
*/

@Pipe({
  name: 'publicationDuration',
  pure: false
})
export class PublicationDurationPipe implements PipeTransform {
  todayString: string;
  publication_date: string;

  /**
   * This is the main method which gives the message to be displayed
   * @param today - This take the actual date at the server-side
   * @param publicationDate - The at which the comment has been publicated
   * @returns {string} - This returns the difference between the dates
   */

  transform(publication: any): string {
    let diffDays: number;
    let today = new Date();
    this.todayString = today.toISOString();
    // console.log(today);
    this.todayString = this.todayString.substring(0, 10);
    // console.log(this.todayString);
    this.publication_date = publication.substring(0, 10);
    // console.log(this.publication_date)
    const date1 = new Date(this.publication_date);
    const date2 = new Date(this.todayString);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return 'Publie a l\'instant';
    }
    return 'Publie il y a ' + diffDays + ' Jours';
  }
}
