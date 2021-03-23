// initialize the technology stack
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Mongo DB is now connected");
})

const healthDeclarationRouter = require('./routes/health-declaration.route');
app.use('/simpleHealthDeclaration', healthDeclarationRouter);

app.listen(port, ()=> {
    console.log(`App initialized.`);
    console.log(`Server is listening in port : ${port}`);
})