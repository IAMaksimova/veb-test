const functions = require('firebase-functions');
const { google } = require('googleapis');

exports.syncToGoogleSheets = functions.firestore
    .document('applications/{appId}')
    .onCreate(async (snapshot, context) => {
        const data = snapshot.data();

        // Авторизация в Google Sheets
        const auth = new google.auth.GoogleAuth({
            keyFile: 'service-account.json',
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: 'YOUR_SHEET_ID',
            range: 'Заявки!A1',
            valueInputOption: 'RAW',
            resource: {
                values: [[
                    data.firstName,
                    data.lastName,
                    data.email,
                    data.phone,
                    new Date().toLocaleString('ru-RU')
                ]]
            }
        });
    });