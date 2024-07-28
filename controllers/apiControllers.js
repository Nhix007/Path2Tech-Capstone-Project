const axios = require('axios');

exports.checkSymptoms = async (req, res) => {
    try {
        const response = await axios.post('https://api.infermedica.com/v3/diagnosis', req.body, {
            headers: {
                'App-Id': process.env.INFERMEDICA_APP_ID,
                'App-Key': process.env.INFERMEDICA_APP_KEY,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
