import { constructMetadata } from "@/content/seo";
import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = constructMetadata("blog");

export default function Page() {
  return <BlogContent />;
}
