export default function Section({
  children,
  full,
}: Readonly<{ children: React.ReactNode; full?: boolean }>) {
  return (
    <div
      className={`flex flex-col   w-full  relative gap-8 md:gap-12   ${full ? "py-0 mb-8 md:mb-12 md:py-0 mt-[-96px] md:mt-[-112px] ": "py-6  md:py-10"} `}
    >
      {children}
    </div>
  );
}
