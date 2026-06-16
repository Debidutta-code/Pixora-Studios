import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = constructMetadata("portfolio");

export default function Page() {
  return <PortfolioContent />;
}
