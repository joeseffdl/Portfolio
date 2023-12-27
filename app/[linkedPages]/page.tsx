import { AboutPage, ContactPage } from "@/components/LinkedPages";
import { notFound } from "next/navigation";

type LinkedPages = "about" | "projects" | "contact";

export default function LinkedPages({
  params: { linkedPages },
}: {
  params: { linkedPages: LinkedPages };
}) {
  return linkedPages === "about" ? (
    <AboutPage />
  ) : linkedPages === "contact" ? (
    <ContactPage />
  ) : (
    notFound()
  );
}
