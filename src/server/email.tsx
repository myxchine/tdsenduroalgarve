"use server";

interface EmailData {
  sender: {
    name: string;
    email: string;
  };
  to: {
    name: string;
    email: string;
  }[];
  subject: string;
  htmlContent: string;
}

const API_KEY: string = process.env.EMAIL_KEY || "";

export default async function sendBookingConfirmationEmail(
  customerName: string,
  customerSurname: string,

  customerMessage: string,
  customerEmail: string,
  requestedRiders: string
): Promise<boolean> {
  const confirmationEmailData: EmailData = {
    sender: { name: customerName, email: customerEmail },
    to: [{ name: "Francisco", email: "michael.dozzantoz@gmail.com" }],
    subject: `Reservation request from ${customerName} ${customerSurname}`,
    htmlContent: `<html>
      <head></head>
      <body>
        <p>Booking request from ${customerName} ${customerSurname} for TDS Enduro Bike Tour,</p>
        <p>For ${requestedRiders} riders,</p>

        <p>${customerMessage}</p>
      
      </body>
    </html>`,
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmationEmailData),
    });

    if (!response.ok) {
      console.log("Error sending email:", response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    throw new Error(`Failed to send email: ${error}`);
  }
}
