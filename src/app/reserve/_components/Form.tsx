"use client";
import { useActionState, useState } from "react";
import { newReservation as action } from "@/server/db/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Form({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const [status, submit, isPending] = useActionState(action, null);

  return (
    <form className="flex flex-col gap-4 max-w-xl mx-auto " action={submit}>
      <div className="flex flex-col gap-2 pb-2">
        <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl text-balance">
          Reserve <span className="text-tdsRed">Tour</span> &{" "}
          <span className="text-tdsRed">Rental</span>
        </h1>
        <p className="max-w-[500px] text-black/60 md:text-xl lg:text-base xl:text-xl">
          Ready for a memorable adventure this holiday season in Algarve,
          Portugal?
        </p>
        <Link
          href={"/tours/off-road-enduro-bike-rental"}
          className="font-bold  text-black"
        >
          Learn more {`->`}
        </Link>
      </div>
      <Inputs searchParams={searchParams} />

      <button
        type="submit"
        className={`bg-black border border-black rounded-md text-white p-2 text-center h-12 px-4 w-full max-w-xl font-tds tracking-wider ${
          isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isPending}
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
      {status && (
        <div className="text-black/60 pt-0 text-sm w-full text-center">
          Form submitted successfully!
        </div>
      )}
      {!status && (
        <div className="text-black/60 pt-0 text-sm w-full text-center">
          Let's get in touch.
        </div>
      )}
    </form>
  );
}

function Inputs({ searchParams }: { searchParams: { [key: string]: string } }) {
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
      <div className="flex flex-row gap-2">
        <select
          name="category"
          className="flex-1 p-2 rounded-md border border-gray-300 bg-white"
        >
          <option key="KTM EXC-300 TPI" value="ktm_exc_300_tpi">
            KTM EXC-300
          </option>
        </select>
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
      </div>

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
