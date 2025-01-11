export default function Row({
  children,
  centered,
  small,
}: Readonly<{
  children: React.ReactNode;
  centered?: boolean;
  small?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col gap-4  px-4 py-2 md:p-6 md:py-4 w-full max-w-6xl mx-auto  ${
        centered ? "items-center text-center justify-center" : ""
      } ${small ? "max-w-[700px]" : ""} `}
    >
      {children}
    </div>
  );
}
