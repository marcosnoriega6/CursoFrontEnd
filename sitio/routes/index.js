var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => { 

  console.log(req.body);

var email= req.body.email
var password= req.body.password
var adress= req.body.adress
var adress2=req.body.adress2
var city= req.body.city
var code= req.body.code

var obj={
  to: 'mnoriega@itba.edu.ar',
  subject: 'contacto desde la web',
  html: email +'se contactó contigo'
}

var transport= nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

var info= await transport.sendMail(obj)

res.render('index', {
  message: 'Mensaje enviado correctamente'
});

});

module.exports = router;
