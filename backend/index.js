
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors({
  origin: ['http://localhost:5173', 'https://portfolio-self-xi-57.vercel.app']
}));


app.use(express.json());

app.post('/contact', async (req, res) =>{
    const {fullname, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${fullname}`,
        text: `Email: ${email}\n\nMensaje:\n${message}`
    }

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({success: true});
    } catch (error){
        console.error("Error al enviar el correo:", error);
        res.status(500).json({success: false, error: error.message});
    }

    
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})