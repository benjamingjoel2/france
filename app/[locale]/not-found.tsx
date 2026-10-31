import { t } from '@/lib/i18n/t';
import Link from '@/components/i18n/Link';
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-charcoal px-gutter pt-[var(--header-h)] text-center text-cream">
      <LogoMark size={64} className="motion-safe:animate-[spin_6s_linear_infinite_reverse]" />
      <p className="font-ui mt-8 text-mist">{t("404 · wrong exit")}</p>
      <h1 className="font-display mt-4 text-4xl">{t("Keep circling")}</h1>
      <p className="mt-6 max-w-[30em] text-mist">
        {t("This road doesn't go anywhere, but France has plenty that do. Go round again and pick another exit.")}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <ButtonLink href="/" variant="cream">
          {t("Back to the roundabout")}</ButtonLink>
        <Link href="/plan-my-road-trip" className="font-ui link-grow self-center px-4">
          {t("Plan my road trip")}</Link>
      </div>
    </div>
  );
}
