"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log("Form Data:", formData);

    // Simulate a 1-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full space-y-8 pb-12 p-6 md:py-24 lg:py-32  flex flex-col items-center max-w-xl mx-auto pt-28"
    >
      <div className="gap-2 flex flex-col w-full">
        <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl  ">
          Contact <span className="text-tdsRed  ">Us</span>
        </h1>
        <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Ready to book a memorable adventure this holiday season in Algarve,
          Portugal? Contact us to discuss how TDS Enduro Algarve can take you on
          an unforgettable journey.
        </p>
      </div>
      <div className="mx-auto w-full  space-y-2">
        <form className="flex flex-col gap-4 max-w-xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" flex-1 p-2 rounded-md border border-gray-300 bg-white "
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className=" flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={formData.message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className={`bg-black border border-black text-sm font-medium rounded-md text-white p-2 text-center px-4 w-full max-w-xl ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 14h4zm2 5.291A7.963 7.963 0 014 12H0c0 4.411 3.589 8 8 8v-4.709z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {isSuccess && (
          <div className="text-black/60 pt-4">Form submitted successfully!</div>
        )}
      </div>
    </section>
  );
}
