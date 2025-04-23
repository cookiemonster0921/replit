//sends email from school email to itself
//gmail not working

const email = require('nodemailer');
const sender = process.env['email']
const authentication = process.env['password']
const fs = require('fs');
var lyrics = `We're no strangers to love
You know the rules and so do I (do I)
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just wanna tell you how I'm feeling
Never gonna tell a lie and hurt you`
var c = lyrics.split('\n')
c.reverse()
//console.log(c)
 const mail = email.createTransport({
    service: 'outlook',
    auth: {
      user: `${sender}`,
      pass: `${authentication}`
    }
  });
  const message_options = {
    from: `${sender}`,
    to: `${sender}`, 
    subject: 'test email',
  };
  mail.sendMail(message_options, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
  });
for (var x of lyrics) {
 
}
