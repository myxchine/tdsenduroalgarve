"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/app/_assets/bikes";

export default function Contact({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formText, setFormText] = useState({
    name: searchParams.name || "",
    email: searchParams.email || "",
    message: searchParams.message || "",
  });

  const router = useRouter();
  const category = searchParams.category || "";
  const riders = searchParams.riders || "1";

  function updateParams(param: string, value: string) {
    const newParams = { ...searchParams, [param]: value };
    router.push(`?${new URLSearchParams(newParams)}`);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a 1-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormText({ name: "", email: "", message: "" });
    window.history.pushState({}, "", ``);
    router.push(`?riders=1&category=enduro`);
    setSuccess(true);
  };

  return (
    <section
      id="contact"
      className="w-full space-y-8 pb-12 p-6 md:py-24 lg:py-32 flex flex-col items-center max-w-xl mx-auto pt-28"
    >
      <div className="gap-2 flex flex-col w-full">
        <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl font-bold">
          Reserve <span className="text-tdsRed">Now</span>
        </h1>
        <p className="max-w-[500px] text-black/60 md:text-xl lg:text-base xl:text-xl">
          Ready to book a memorable adventure this holiday season in Algarve,
          Portugal? Contact us to discuss how TDS Enduro Algarve can take you on
          an unforgettable journey.
        </p>
      </div>
      <div className="mx-auto w-full space-y-2">
        <form className="flex flex-col gap-4 max-w-xl" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={formText.name}
            onChange={(e) => setFormText({ ...formText, name: e.target.value })}
            onBlur={(e) => updateParams("name", e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={formText.email}
            onChange={(e) =>
              setFormText({ ...formText, email: e.target.value })
            }
            onBlur={(e) => updateParams("email", e.target.value)}
          />
          <select
            name="category"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={category}
            onChange={(e) => updateParams("category", e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            name="riders"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={riders}
            onChange={(e) => updateParams("riders", e.target.value)}
          >
            <option value="1">1 Rider</option>
            <option value="2">2 Riders</option>
            <option value="3">3 Riders</option>
            <option value="4">4 Riders</option>
            <option value="5">5 Riders</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
            required
            value={formText.message}
            onChange={(e) =>
              setFormText({ ...formText, message: e.target.value })
            }
            onBlur={(e) => updateParams("message", e.target.value)}
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
        {success && (
          <div className="text-black/60 pt-4">Form submitted successfully!</div>
        )}
      </div>
    </section>
  );
}
