import { cn } from "@/lib/cn";

/**
 * Curtain wipe from the top while the image inside settles from a slight zoom,
 * driven by scroll position in CSS. Children should be the image (fill).
 */
export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("sd-clip relative overflow-hidden", className)}>
      <div className="sd-zoom absolute inset-0">{children}</div>
    </div>
  );
}
