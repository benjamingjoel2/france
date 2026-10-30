import { cn } from "@/lib/cn";

/** Moves its children at a fraction of scroll speed as the wrapper leaves the screen (CSS only). */
export function Parallax({
  children,
  className,
  strength = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  return (
    <div
      className={cn("sd-parallax relative overflow-hidden", className)}
      style={{ ["--sd-shift" as string]: `${strength * 100}%` }}
    >
      <div className="sd-parallax-inner absolute inset-0">{children}</div>
    </div>
  );
}
