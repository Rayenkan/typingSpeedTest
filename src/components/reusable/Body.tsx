export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={`w-full h-full flex items-center justify-center flex-col bg-[#323437]`}
    >
      {children}
    </body>
  );
}
