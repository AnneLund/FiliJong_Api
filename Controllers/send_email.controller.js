const emailjs = require("emailjs");

class EmailController {
  constructor() {
    console.log("Instance call of EmailController");

    // Konfigurer din EmailJS server her
    this.emailServer = emailjs.server.connect({
      user: "annels87@hotmail.com",
      password: "Annelund87",
      host: "smtp.service_4c656gf.com",
      ssl: true,
    });
  }

  sendEmail = async (req, res) => {
    const { type } = req.body; // Antag at type er den information, du vil sende

    // Konfigurer email-indstillinger
    const emailOptions = {
      text: `Der blev klikket på type: ${type}`,
      from: "Din webudvikler",
      to: "annedeveloper@hotmail.com",
      subject: "Ny Klik Aktivitet",
      // yderligere email indstillinger...
    };

    // Send email
    this.emailServer.send(emailOptions, (err, emailRes) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "Email sent successfully" });
    });
  };
}

module.exports = { EmailController };
