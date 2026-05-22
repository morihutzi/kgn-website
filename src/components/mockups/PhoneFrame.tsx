type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9.5/20] w-full max-w-[230px] rounded-[2.4rem] bg-[#1a1a19] shadow-[0_24px_60px_rgba(74,74,73,0.18)] ${className}`}
    >
      <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-[#fcfaf7]">
        {children}

        <div className="pointer-events-none absolute inset-x-0 top-1.5 z-20 flex justify-center">
          <div
            className="h-[18px] w-[62px] rounded-full bg-[#1a1a19]"
            aria-hidden
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center">
          <div
            className="h-1 w-20 rounded-full bg-text-dark/25"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
