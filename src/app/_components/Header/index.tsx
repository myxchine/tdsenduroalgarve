import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import AnnouncementBanner from "./AnnouncementBanner";
export default function Header() {
  return (
    <header className="flex flex-col items-center w-full  bg-transparent z-0 ">
      <AnnouncementBanner />
      <section className="w-full md:hidden block">
        <MobileMenu />
      </section>
      <section className="w-full md:block hidden">
        <Menu />
      </section>
    </header>
  );
}
