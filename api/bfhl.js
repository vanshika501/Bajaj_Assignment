export default function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const FULL_NAME = 'Vanshika Garg';
  const DOB_DDMMYYYY = '10012005';
  const EMAIL = 'vanshika2505.be22@chitkara.edu.in';
  const ROLL_NUMBER = '2210992505';
  const USER_ID = `${FULL_NAME.toLowerCase().replace(/\s+/g, '_')}_${DOB_DDMMYYYY}`;

  function concatStringFromAlphabets(alphabets) {
    let allChars = alphabets.join('').split('').reverse();

    return allChars
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join('');
  }

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
      const s = String(item);

      if (/^\d+$/.test(s)) {
        // Number strings
        if (parseInt(s) % 2 === 0) even_numbers.push(s);
        else odd_numbers.push(s);
        sum += parseInt(s);
      } else if (/^[a-zA-Z]+$/.test(s)) {
        // Alphabet strings
        alphabets.push(s.toUpperCase());
      } else {
        // Special characters
        special_characters.push(s);
      }
    });

    const concat_string = concatStringFromAlphabets(alphabets);

    return res.status(200).json({
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
    });
  } catch (err) {
    return res.status(400).json({
      is_success: false,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      message: err.message
    });
  }
}
