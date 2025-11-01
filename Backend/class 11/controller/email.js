import nodemailer from "nodemailer";
export const welcomeEmail = async (request, response) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "fq770002@gmail.com",
      subject: "Hello from Nodemailer",
      text: "This is a test email sent using Nodemailer.",
    };
    await transporter.sendMail(mailOptions);
  
     response.json({
      message: "email sent successfully!",
      status: true,
    });

} catch (error) {
    response.json({
      message: error.message || "something went wrong!",
      status: false,
    });
  }
};
