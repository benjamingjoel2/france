import { whatsappHref } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

/** Floating WhatsApp button, bottom right. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref("Bonjour! I'd like to plan a road trip in France.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat to a Rond-Point specialist on WhatsApp"
      className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 flex h-14 items-center gap-2 rounded-full bg-sunflower pr-4 pl-4 text-charcoal shadow-[0_6px_24px_rgba(20,20,24,0.25)] transition-transform duration-300 ease-[var(--ease-rp)] hover:-translate-y-0.5 data-[raised=true]:bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:right-6 lg:bottom-6"
      data-whatsapp-fab
    >
      <Icon name="whatsapp" size={24} />
      <span className="font-ui hidden max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-500 ease-[var(--ease-rp)] group-hover:max-w-[200px] md:inline">
        Chat to a specialist
      </span>
    </a>
  );
}
