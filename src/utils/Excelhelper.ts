import * as XLSX from 'xlsx';
import * as fs from 'fs';

export class ExcelHelper {
    private workbook: XLSX.WorkBook;

    constructor(private filePath: string) {
        const file = fs.readFileSync(this.filePath);
        this.workbook = XLSX.read(file, { type: 'buffer' });
    }

    /**
     * Reads the sheet data and returns it as an array of typed records.
     * @param sheetName - Name of the sheet to read
     * @returns Typed data rows
     */
    public getSheetData<T>(sheetName: string): T[] {
        const sheet = this.workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found in ${this.filePath}`);
        }

        const jsonData = XLSX.utils.sheet_to_json<T>(sheet, {
            header: 'A', // or true to use header row
            defval: '',  // provide default values if cells are empty
        });

        return jsonData;
    }

    /**
     * List all available sheet names in the workbook
     */
    public getSheetNames(): string[] {
        return this.workbook.SheetNames;
    }
}
