"use server";

// lots to do here

import sendEmail from "@/server/email";
import sendBookingConfirmationEmail from "../emailTour";

import { reservations } from "./schema";
import { db } from "../db";

export async function newReservation(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const surname = formData.get("surname")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();
  const riders = formData.get("riders")?.toString();

  // Ensure all form data fields are available and valid
  if (
    !name ||
    !surname ||
    !message ||
    !email ||
    !riders ||
    isNaN(Number(riders))
  ) {
    return false;
  }
  if (
    typeof name !== "string" ||
    typeof surname !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string" ||
    typeof riders !== "string"
  ) {
    return false;
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

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function newContact(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string"
  ) {
    return false;
  }

  try {
    await sendEmail(name, message, email);
    return true;
  } catch (error) {
    return false;
  }
}
