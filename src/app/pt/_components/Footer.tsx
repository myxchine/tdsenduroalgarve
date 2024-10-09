import Link from "next/link";
import Form from "./Form";
import LanguageSwitcher from "./LanguageSwitcher";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-16 pb-6 md:py-28 md:pb-6 md:px-6 border-t border-foreground/10 mt-12">
      <div className="flex flex-col items-start justify-between gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-col gap-2 items-start text-sm text-foreground/60 md:text-left mb-8">
          <div className="text-3xl text-left text-foreground w-full font-tds md:text-4xl md:text-left">
            TDS <span className="text-tdsRed">Enduro</span> Algarve
          </div>
          <p className="text-xs mt-2 text-black/60 md:text-sm max-w-xl w-full text-balance">
            Descubra a emoção das aventuras de motocicleta off-road e de rua na
            bela região do Algarve. Desde tours guiados, aluguer de motos ou até
            mesmo compra, oferecemos tudo o que você precisa para uma
            experiência inesquecível.
          </p>

          <Link href="/pt/tours" className="hover:underline text-tdsRed mt-2">
            Ver passeios {"->"}
          </Link>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-4 w-full gap-8 md:gap-12 md:flex-row">
          <nav className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
            <div className="text-base font-semibold">Principal</div>

            <Link href="/pt" className="hover:underline text-black/60">
              Início
            </Link>
            <Link href="/pt/tours" className="hover:underline text-black/60">
              Passeios
            </Link>
            <Link href="/pt/bikes" className="hover:underline text-black/60">
              Motos
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
            <div className="text-base font-semibold">Reservas</div>
            <Link href="/pt/reserve" className="hover:underline text-black/60">
              Reservar Passeio
            </Link>

            <Link
              href="/pt/about-tour"
              className="hover:underline text-black/60"
            >
              Sobre o Passeio
            </Link>
          </nav>

          <div className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
            <div className="text-base font-semibold">Contato</div>
            <p className="hover:underline text-black/60">
              Francisco Dos Santos
            </p>
            <p className="hover:underline text-black/60">+351 968 185 407</p>
            <p className="hover:underline text-black/60">
              francisco908.dossantos@gmail.com
            </p>
          </div>
          <div className="hidden md:block">
            <Form />
          </div>
        </section>
        <div className="py-12 md:hidden">
          <Form />
        </div>
        <LanguageSwitcher />
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm mt-4 w-full">
          <p>&copy; 2024 TDS Enduro Algarve. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
