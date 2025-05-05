"use client";
import { useActionState, useState, useEffect } from "react";
import { newReservation as action } from "@/server/db/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Form({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const [status, submit, isPending] = useActionState(action, null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: searchParams.name || "",
    surname: searchParams.surname || "",
    email: searchParams.email || "",
    verifyEmail: "",
    category: searchParams.category || "",
    riders: searchParams.riders || "",
    message: searchParams.message || "",
  });

  function updateParams(param: string, value: string) {
    const newParams = { ...searchParams, [param]: value };

    router.replace(`/reserve?${new URLSearchParams(newParams)}`, {
      scroll: false,
    });
  }

  useEffect(() => {
    if (status === true) {
      toast.success("Reservation submitted successfully");
      router.push(
        `/reserve/thankyou?name=${encodeURIComponent(formData.name)}`
      );
    }

    if (status === false) {
      toast.error("An error occured please try again");
      setFormData({
        name: "",
        surname: "",
        email: "",
        verifyEmail: "",
        category: "",
        riders: "",
        message: "",
      });
    }
  }, [status, router]);

  return (
    <form className="flex flex-col gap-4 w-full " action={submit}>
      <Inputs
        setFormData={setFormData}
        formData={formData}
        updateParams={updateParams}
      />

      <button
        type="submit"
        className={`bg-black border border-black hover:bg-black/80 rounded-md text-white p-2 text-center h-12 px-4 w-full font-tds tracking-wider ${
          isPending || formData.email !== formData.verifyEmail
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={isPending || formData.email !== formData.verifyEmail}
      >
        {isPending ? (
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
      {formData.email &&
        formData.verifyEmail &&
        formData.email !== formData.verifyEmail && (
          <p className="text-accent pt-0 text-sm w-full text-center">
            Your email address' don't match
          </p>
        )}
    </form>
  );
}

function Inputs({
  setFormData,
  updateParams,
  formData,
}: {
  setFormData: any;
  updateParams: any;
  formData: any;
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        required
        value={formData.name}
        onBlur={(e) => updateParams("name", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        required
        value={formData.surname}
        onBlur={(e) => updateParams("surname", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, surname: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        required
        value={formData.email}
        onBlur={(e) => updateParams("email", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="email"
        name="verifyEmail"
        placeholder="Verify email"
        className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        required
        value={formData.verifyEmail}
        onChange={(e) => {
          setFormData({ ...formData, verifyEmail: e.target.value });
        }}
      />
      <select
        name="riders"
        className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        required
        value={formData.riders || ""}
        onBlur={(e) => updateParams("riders", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, riders: e.target.value });
        }}
      >
        <option value="1">1 Rider</option>
        <option value="2">2 Riders</option>
        <option value="3">3 Riders</option>
        <option value="4">4 Riders</option>
        <option value="5">5 Riders</option>
      </select>

      <textarea
        name="message"
        placeholder="Details about dates, riders, shoe/clothing sizes and any other information you would like to share with us."
        className="p-2 rounded-md border border-gray-300 bg-white h-[150px]"
        required
        value={formData.message}
        onBlur={(e) => updateParams("message", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
      />
    </>
  );
}
