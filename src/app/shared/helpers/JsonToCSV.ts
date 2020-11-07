/**
 * @classdesc Helper to convert JSON data to CSV file.
 * @author Melo
 * @version 1.0.0
 * @copyright MELO 2019
 * @name JSONToCSV
 */

export class JSONToCSV {

    /**
     * @constructor
     * @param JSONData Data to be converted
     * @param ShowLabel File name
     * @param ReportTitle Data name
     */
    constructor(private JSONData: any, private ShowLabel: any, private ReportTitle: any) {
    }
    downloader() {
        // If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        const arrData = typeof this.JSONData !== 'object' ? JSON.parse(this.JSONData) : this.JSONData;
        let CSV = '';
        // This condition will generate the Label/Header
        if (this.ShowLabel) {
            // tslint:disable-next-line:no-shadowed-variable
            let row = '';

            // This loop will extract the label from 1st index of on array
            // tslint:disable-next-line:prefer-const
            // tslint:disable-next-line:forin
            for (const index in arrData[0]) {
                // Now convert each value to string and comma-seprated
                row += index + ';';
            }
            row = row.slice(0, -1);
            // append Label row with line break
            CSV += row + '\r\n';
        }

        // 1st loop is to extract each row
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < arrData.length; i++) {
            let row = '';
            // 2nd loop will extract each column and convert it in string comma-seprated
            // tslint:disable-next-line:forin
            for (const index in arrData[i]) {
                row += arrData[i][index] + ';';
            }
            row.slice(0, row.length - 1);
            // add a line break after each row
            CSV += row + '\r\n';
        }

        if (CSV === '') {
            alert('Invalid data');
            return;
        }

        // this trick will generate a temp "a" tag
        const link = document.createElement('a');
        link.id = 'lnkDwnldLnk';

        // this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);

        const csv = CSV;
        const blob = new Blob([csv], { type: 'text/csv' });
        const csvUrl = URL.createObjectURL(blob);
        const filename = this.ReportTitle + '.csv';
        link.setAttribute('download', filename);
        link.setAttribute('href', csvUrl);
        link.click();
        document.body.removeChild(link);

    }

    printFile() {

    }
}
