import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-charcoal px-gutter pt-[var(--header-h)] text-center text-cream">
      <LogoMark size={64} className="motion-safe:animate-[spin_6s_linear_infinite_reverse]" />
      <p className="font-ui mt-8 text-mist">404 · wrong exit</p>
      <h1 className="font-display mt-4 text-4xl">Keep circling</h1>
      <p className="mt-6 max-w-[30em] text-mist">
        This road doesn&apos;t go anywhere, but France has plenty that do. Go round again and pick another exit.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <ButtonLink href="/" variant="cream">
          Back to the roundabout
        </ButtonLink>
        <Link href="/plan-my-road-trip" className="font-ui link-grow self-center px-4">
          Plan my road trip
        </Link>
      </div>
    </div>
  );
}
