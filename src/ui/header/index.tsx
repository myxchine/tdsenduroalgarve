import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Header() {
  return (
    <header className="flex flex-col w-full relative  z-10  bg-transparent">
      <div className="md:p-6 md:py-4 w-full flex flex-row items-center justify-between    max-w-6xl mx-auto">
        <Mobile />
        <Desktop />
      </div>
    </header>
  );
}
