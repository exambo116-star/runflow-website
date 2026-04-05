import Image from "next/image";

type RunflowLogoProps = {
  size?: number;
  className?: string;
};

export function RunflowLogo({
  size = 44,
  className = "",
}: RunflowLogoProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-[#E4D8BC] bg-white shadow-[0_12px_30px_rgba(42,42,42,0.05)] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/runflow-logo.png"
        alt="Runflow logo"
        width={Math.round(size * 0.68)}
        height={Math.round(size * 0.68)}
        className="h-auto w-auto object-contain"
        priority
      />
    </div>
  );
}
