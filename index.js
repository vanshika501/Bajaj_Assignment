import express, { json } from 'express';
const app = express();
app.use(json());

const FULL_NAME = 'Vanshika Garg';
const DOB_DDMMYYYY = '10012005';
const EMAIL = 'vanshika2505.be22@chitkara.edu.in';
const ROLL_NUMBER = '2210992505';
const USER_ID = `${FULL_NAME.toLowerCase()}_${DOB_DDMMYYYY}`;

function concatStringFromAlphabets(alphabets) {
    let allChars = alphabets.join('').split('').reverse();

    return allChars
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join('');
}

//  /bfhl Route 
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        if (!Array.isArray(data)) {
            throw new Error('data must be an array');
        }

        let even_numbers = [];
        let odd_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;

        data.forEach(item => {
            // Convert to string for checks
            const s = String(item);

            if (/^\d+$/.test(s)) {
                // Numbers only
                if (parseInt(s) % 2 === 0) even_numbers.push(s);
                else odd_numbers.push(s);
                sum += parseInt(s);
            } else if (/^[a-zA-Z]+$/.test(s)) {
                // Alphabets only
                alphabets.push(s.toUpperCase());
            } else {
                // Special characters (not number, not alphabet)
                special_characters.push(s);
            }
        });

        const concat_string = concatStringFromAlphabets(alphabets);

        const response = {
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: String(sum),
            concat_string
        };

        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({
            is_success: false,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            message: err.message
        });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
