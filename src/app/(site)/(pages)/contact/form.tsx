"use client";
import { useActionState, useState, useEffect } from "react";
import { newContact } from "@/server/db/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SpinnerIcon } from "@/ui/icons";

export default function Form() {
  const router = useRouter();
  const [status, submit, isPending] = useActionState(newContact, null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status === true) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Reservation submitted successfully");
    }

    if (status === false) {
      toast.error("An error occured please try again");
    }
  }, [status, router]);

  return (
    <form className="flex flex-col gap-4 mt-4  w-full" action={submit}>
      <Inputs formData={formData} setFormData={setFormData} />

      <button
        type="submit"
        className={`bg-black  text-background flex flex-col justify-center items-center  border border-foreground rounded  hover:bg-background hover:text-foreground  p-2 text-center h-12 px-4 w-full ${
          isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isPending}
      >
        {isPending ? (
          <SpinnerIcon className="animate-spin size-5 " />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

function Inputs({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="flex-1 p-2  border border-black/60 bg-background w-full text-black placeholder:text-black/60 rounded"
        required
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-2  border border-black/60 bg-background w-full text-black placeholder:text-black/60 rounded"
        required
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />

      <textarea
        name="message"
        placeholder="Tell us about yourself and what you're looking for."
        className=" p-2  border border-black/60 bg-background w-full text-black h-[150px] placeholder:text-black/60 rounded"
        required
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
      />
    </>
  );
}
