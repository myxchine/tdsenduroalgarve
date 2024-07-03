"use server";

import sendBookingConfirmationEmail from "../email";
import { db } from "../db";
import { reservations } from "../db/schema";

export async function newReservation(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const surname = formData.get("surname")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();
  const riders = formData.get("riders")?.toString();

  // Ensure all form data fields are available and valid
  if (
    typeof name !== "string" ||
    typeof surname !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string" ||
    typeof riders !== "string"
  ) {
    return "Invalid form data";
  }

  try {
    await db.insert(reservations).values({
      name: name,
      surname: surname,
      email: email,
      message: message,
      riders: Number(riders),
    });
    await sendBookingConfirmationEmail(name, surname, message, email, riders);

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}
