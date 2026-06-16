import { ContactInfo } from "@/types";

export const contactInfo: ContactInfo = {
  email: "debiduttaacharya.dev@gmail.com",
  phone: "+91 9348123282",
  address: "Bhubaneswar, Odisha, India",
  googleMapIframe: "https://www.google.com/maps/embed?pb=...",
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/...", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com/...", icon: "Twitter" }
  ],
  apiEndpoint: "http://localhost:5000/api/trigger-appointment",
  apiSecret: "SECRET_KEY_FOR_JWT",
  receiverEmail: "debiduttaacharya.dev@gmail.com"
};
