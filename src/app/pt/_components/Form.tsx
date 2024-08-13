"use client";
import { useActionState, useState } from "react";
import { newMailMember } from "@/server/db/utils";

export default function Form() {
  const [status, submit, isPending] = useActionState(newMailMember, null);

  return (
    <form
      className="flex flex-col gap-6   w-full  max-w-md xl:px-0 mx-auto"
      action={submit}
    >
      <div className="flex flex-col gap-2">
        {status && (
          <p className="">
            <span className="text-green-700 font-semibold">Enviado</span> com
            sucesso!
          </p>
        )}
        {!status && (
          <p className="font-semibold">Inscreva-se na nossa newsletter</p>
        )}

        <p className="text-sm text-foreground/60">
          Tenha acesso a ofertas exclusivas mensais e informações sobre motos.
        </p>
      </div>

      <div className="flex flex-row w-full gap-2">
        <Inputs />

        <button
          type="submit"
          className={`bg-tdsRed border h-[40px]  border-tdsRed rounded  text-background p-2 text-center h-12 px-4 w-fit text-sm hover:bg-tdsRed/80 hover:border-accent/80  ${
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
              </svg>
            </div>
          ) : (
            "Submeter"
          )}
        </button>
      </div>
    </form>
  );
}

function Inputs() {
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-3 h-[40px] rounded  border border-foreground/20 bg-background w-full text-foreground placeholder:text-foreground/60 text-sm"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </>
  );
}
