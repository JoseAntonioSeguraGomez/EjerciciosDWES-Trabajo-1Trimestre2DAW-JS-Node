import nodemailer from "nodemailer";

let transporter = null;

export function init(config) {
  const smtpConfig = {
  host: config.host,
  port: config.port,
  secure: false,
};

if(config.user){
  smtpConfig.auth = {
      user: config.smtp.user,
      pass: config.smtp.password,
    };
  }

transporter = nodemailer.createTransport(smtpConfig);

transporter.verify(function(error, success){
  if(error) {
    console.log(error);
  } else {
      console.log("SMTP ready");
    }
  });
}

export async function send(mailOptions){
  return transporter.sendMail({
    from: transporter.options.auth.user,
    ...mailOptions
  })
}

