import { ExcelHelper } from '../../src/utils/Excelhelper';
import { LoginData } from '../../src/utils/LoginData';
import path from 'path';
import { test } from '@playwright/test';

const filepath = path.join(__dirname, '../../src/TestData/Loginexcel.xlsx');
const excel = new ExcelHelper(filepath);

// Get all sheets (optional)
console.log('Sheets:', excel.getSheetNames());

// Get typed login records
const loginRecords: LoginData[] = excel.getSheetData<LoginData>('Sheet1');

test.describe('Login tests from Excel data', () => {
//   for (const record of loginRecords) {
    
    // loginRecords.forEach(async loginRecords.username)

    // test(`Login with ${record.username} / ${record.password}`, async ({ page }) => {
    //   console.log(`Login with ${record.username} / ${record.password}`);
    //   await page.goto('https://www.google.com');
    //   // Add further test steps here as needed
    // });
//   }
});