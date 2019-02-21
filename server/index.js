const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// server creation
const app = express();
app.use( bodyParser.json() );
app.use( cors() );

app.use( express.static( `${__dirname}/../build` ) );

//nodemailer shtuff
app.post('/api/sendEmail', (req, res) => {
    console.log("message is coming through")
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "login",
                user: process.env.MY_EMAIL,
                pass: process.env.MY_LOCK
            }
        });
        

        let mailOptions = {
            from: `${req.body.name} <${req.body.email}>`, 
            to: process.env.MY_EMAIL,
            subject: "website email", 
            html:`<div><p> 
            This is an automated Email from your website.  Are you stoked or what, buddy??? <br/>
            <br/>Name: ${req.body.name}<br/>
            <br/>Date: ${req.body.date}<br/>
            <br/>Time: ${req.body.time}<br/>
            <br/>Telephone: ${req.body.phone}<br/>
            <br/>Message: ${req.body.description}</p></div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send('done')
        });
    });
})


// port stuff
const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})