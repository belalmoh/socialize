const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

const { routes } = require('./routes');

dotenv.config();
const app = express();
const PORT = process.env.EXPRESS_PORT || 8800;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connection successful');
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

routes.map(async ({prefix, route}) => {
    await app.use(prefix, route);
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});