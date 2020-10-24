require('dotenv').config();
const ownerEmail= process.env.MAIL_CONTACT;
var fs = require('fs');
var contents = fs.readFileSync('./API/mail/mailTemplates/confirmation.html', 'utf8');

let messageModel = {
    to: ownerEmail,
    from: ownerEmail,
    subject: 'Necesito de tus servicios Maia',
    text: '',
    html:contents,
  };
//validateEmail validates the user email in the contact form
function validateEmail(email){
    const mailRegex = /\S+@\S+\.\S+/;
    if(mailRegex.test(email)){
        return email;
    }
    return new Error("Invalid Email") ;
}

//validateTelephone validates the user telephone in the contact form
function validateTelephone(telephone){
    const onlyNumberRegex = /^-?\d+\.?\d*$/;
    if(onlyNumberRegex.test(telephone)){
        return telephone;
    }
    return new Error("Invalid Telephone")
}


function validateComment(comment){
    if(comment.length > 255){
        comment.substr(0,255)
    }
    return comment;
}

function getNewFormMessage(email,comment,name,telephone){
    let newMessage = messageModel;
  const cleanTelephone = validateTelephone(telephone);
  const cleanMail = validateEmail(email);
 newMessage.text = validateComment(comment);
 newMessage.html= newMessage.html.replace('{{name}}',name);
 newMessage.html= newMessage.html.replace('{{comment}}',newMessage.text);
 newMessage.html= newMessage.html.replace('{{telephone}}',cleanTelephone);
 newMessage.html=  newMessage.html.replace('{{email}}', cleanMail);
  return newMessage;
    
}
exports.getNewFormMessage = getNewFormMessage;