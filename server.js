const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (frontend HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to fetch the source code
app.get('/get-source', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.json({ success: false, message: 'No URL provided' });
    }

    try {
        const response = await axios.get(url);
        res.json({ success: true, sourceCode: response.data });
    } catch (error) {
        res.json({ success: false, message: 'Failed to fetch source code' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
