import { TDSIcon } from "./icons";

export function Logo() {
  return (
    <div className="text-center flex flex-row text-foreground font-tds  text-3xl font-bold items-center justify-center w-fit">
      <TDSIcon className="h-14 w-fit md:h-16 " />
    </div>
  );
}
