import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Rond-Point: design concepts (preview)" },
  robots: { index: false, follow: false },
};

export default function ConceptsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
