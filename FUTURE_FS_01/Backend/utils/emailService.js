const nodemailer = require('nodemailer')
const sendContactEmail = async(contactData) =>{
    try{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            },
            secure: false,  
            tls: {
                rejectUnauthorized: false  
            }
        })
        const mailOption = {
            from :`"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
            to:`${process.env.EMAIL_TO}`,
            subject: ` New Message from ${contactData.name}`,
            html:`
            <h2>New Email Submission </h2>
            <p><strong>Name:</strong>${contactData.name}</p>
            <p><strong>Email:</strong>${contactData.email}</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${contactData.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Received at ${new Date().toLocaleString()}
        </p>

            `,
        text:`
        New contact form submission
        Name:${contactData.name},
        Email:${contactData.email},
        Message:${contactData.message}
        `
        }
        const info = await transporter.sendMail(mailOption)
        console.log('Email sent',info.messageId)
        return true
    }catch(err){
        console.log('Email error',err)
        return false
    }
}

module.exports = {sendContactEmail}