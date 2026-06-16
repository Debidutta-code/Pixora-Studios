import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = constructMetadata("about");

export default function Page() {
  return <AboutContent />;
}
