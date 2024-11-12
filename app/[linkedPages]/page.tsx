import { AboutPage, ContactPage } from "./_LinkedPages";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const generateMetadata = async (props: LinkedPages): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: `${params.linkedPages[0]}`.toUpperCase() + params.linkedPages.slice(1),
  };
}

type LinkedPages = {
  params: Promise<{
    linkedPages: "about" | "contact";
  }>
}

export default async function LinkedPages(props: LinkedPages) {
  const params = await props.params;

  const {
    linkedPages
  } = params;

  return linkedPages === "about" ? (
    <AboutPage />
  ) : linkedPages === "contact" ? (
    <ContactPage />
  ) : (
    notFound()
  );
}
