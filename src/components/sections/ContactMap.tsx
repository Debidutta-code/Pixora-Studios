"use client";

import { contactInfo } from "@/content/contact";

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-border">
      <iframe
        src={contactInfo.googleMapIframe}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
