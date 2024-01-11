import { AboutPage, ContactPage } from "./_LinkedPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const generateMetadata = ({ params }: LinkedPages): Metadata => {
  return {
    title: `${params.linkedPages}`,
  };
}

type LinkedPages = {
  params: {
    linkedPages: "about" | "contact";
  }
}

export default function LinkedPages({
  params: { linkedPages },
}: LinkedPages) {
  return linkedPages === "about" ? (
    <AboutPage />
  ) : linkedPages === "contact" ? (
    <ContactPage />
  ) : (
    notFound()
  );
}
