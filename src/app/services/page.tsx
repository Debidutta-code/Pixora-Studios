import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = constructMetadata("services");

export default function ServicesPage() {
  return <ServicesContent />;
}
