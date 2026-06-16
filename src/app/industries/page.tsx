import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = constructMetadata("industries");

export default function IndustriesPage() {
  return <IndustriesContent />;
}
