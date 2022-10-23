require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log(`The server is start at http://localhost:${PORT}`);
});
