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
  requestedBike: string,
  requestedDays: string
): Promise<boolean> {
  const confirmationEmailData: EmailData = {
    sender: { name: customerName, email: customerEmail },
    to: [
      { name: "Francisco", email: "francisco908.dossantos@gmail.com" },
      { name: "Michael", email: "michael@duality.agency" },
    ],
    subject: `TDS Bike Rental request from ${customerName} ${customerSurname}`,
    htmlContent: `<html>
      <head></head>
      <body>
        <h1>Bike Rental request from ${customerName} ${customerSurname} </h1>
        <h2>To Rent a ${requestedBike}</h2>
        <h2>For ${requestedDays} ${
      Number(requestedDays) > 1 ? "days" : "day"
    }</h2>
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
