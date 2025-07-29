const { google } = require('googleapis');
const axios = require('axios');
const {https} = require("firebase/compat");

exports.proxyToGoogleSheet = https.onRequest(async (req, res) => {
    // 1. Аутентификация через сервисный аккаунт
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // 2. Получение данных из Firebase
    const formData = req.body;

    try {
        const sheets = google.sheets({ version: 'v4', auth });
        await sheets.spreadsheets.values.append({
            spreadsheetId: 'YOUR_SHEET_ID',
            range: 'Лист1!A1',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[
                    formData.firstName,
                    formData.lastName,
                    formData.email,
                    new Date().toISOString()
                ]]
            }
        });
        res.status(200).send('OK');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error writing to sheet');
    }
});