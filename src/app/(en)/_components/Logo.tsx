import { TDSIcon } from "./icons";

export function Logo() {
  return (
    <div className="text-center flex flex-row text-foreground font-tds  text-3xl font-bold items-center justify-center w-16">
      <TDSIcon className="h-14 w-14 md:h-16 md:w-16" />
    </div>
  );
}
