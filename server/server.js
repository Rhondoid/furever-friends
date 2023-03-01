const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3001; 
const app = express();

app.listen(port, () => console.log(`the server is running on port ${port}`));