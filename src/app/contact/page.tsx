import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = constructMetadata("contact");

export default function Page() {
  return <ContactContent />;
}
