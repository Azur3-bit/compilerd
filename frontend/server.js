


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/submit-code', async (req, res) => {
    try {
        const codeData = req.body;
        if (codeData) {
            res.status(200).json({ message: 'Code input received.', code: codeData });
        } else {
            res.status(400).json({ message: 'No code input received.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred.', error: error.message });
    }
});

app.get('/api/submit-code', async (req, res) => {
    console.log("hello");
    res.status(200).json({ message: "Hello from GET /api/submit-code" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

