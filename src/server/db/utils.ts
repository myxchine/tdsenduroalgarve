"use server";

import sendBookingConfirmationEmail from "../emailTour";
import sendRentalConfirmationEmail from "../emailRental";

import { db } from "../db";
import { reservations, rentals, mailList } from "../db/schema";

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

export async function newRental(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const surname = formData.get("surname")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();
  const days = formData.get("days")?.toString();
  const bike = formData.get("bike")?.toString();

  // Ensure all form data fields are available and valid
  if (
    typeof name !== "string" ||
    typeof surname !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string" ||
    typeof days !== "string" ||
    typeof bike !== "string"
  ) {
    return "Invalid form data";
  }

  try {
    await db.insert(rentals).values({
      name: name,
      surname: surname,
      email: email,
      message: message,
      bike: bike,
      days: Number(days),
    });
    await sendRentalConfirmationEmail(
      name,
      surname,
      message,
      email,
      bike,
      days
    );

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}

export async function newMailMember(currentState: any, formData: FormData) {
  const email = formData.get("email")?.toString();

  // Ensure all form data fields are available and valid
  if (typeof email !== "string") {
    return "Invalid form data";
  }

  try {
    await db.insert(mailList).values({
      email: email,
    });

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}
