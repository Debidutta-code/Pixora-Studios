"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { contactInfo } from "@/content/contact";
import { industries } from "@/content/industries";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, Phone, MapPin, Send } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().regex(/^[0-9+ ]+$/, "Invalid phone format").min(10, "Phone number too short"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().min(20, "Message should be at least 20 characters"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(contactInfo.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiSecret: contactInfo.apiSecret,
          clinicName: data.businessName,
          doctorEmail: contactInfo.receiverEmail,
          patientName: data.name,
          patientPhone: data.phone,
          date: data.preferredDate,
          time: data.preferredTime,
          reason: data.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              <RevealText>Let&apos;s Build the Future</RevealText>
            </h1>
            <p className="text-xl text-text-2 mb-12">
              Have a project in mind? We&apos;d love to hear from you. Book a free consultation and let&apos;s talk about how we can help your business grow.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-text-3 uppercase tracking-widest font-bold mb-1">Email Us</div>
                  <div className="text-lg font-bold">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-text-3 uppercase tracking-widest font-bold mb-1">Call Us</div>
                  <div className="text-lg font-bold">{contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-text-3 uppercase tracking-widest font-bold mb-1">Location</div>
                  <div className="text-lg font-bold">{contactInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-surface border border-border">
               <h4 className="font-bold mb-2">Response Time</h4>
               <p className="text-text-2 text-sm">We typically respond to all inquiries within 2 business hours.</p>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/5 border border-accent/20 rounded-[40px] p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent text-background flex items-center justify-center mb-8">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
                  <p className="text-text-2 mb-8">Thank you for reaching out. We&apos;ll be in touch with you shortly to confirm your consultation.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-accent font-bold hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-surface border border-border rounded-[40px] p-8 md:p-12 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Name</label>
                      <input
                        {...register("name")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Phone</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                        placeholder="+91 99999 99999"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Email</label>
                    <input
                      {...register("email")}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Business Name</label>
                      <input
                        {...register("businessName")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                        placeholder="Your Business Ltd."
                      />
                      {errors.businessName && <p className="text-red-500 text-xs mt-1 ml-2">{errors.businessName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Industry</label>
                      <select
                        {...register("businessType")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                      >
                        <option value="">Select Industry</option>
                        {industries.map((i) => (
                          <option key={i.slug} value={i.name}>{i.name}</option>
                        ))}
                      </select>
                      {errors.businessType && <p className="text-red-500 text-xs mt-1 ml-2">{errors.businessType.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Preferred Date</label>
                      <input
                        type="date"
                        {...register("preferredDate")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                      />
                      {errors.preferredDate && <p className="text-red-500 text-xs mt-1 ml-2">{errors.preferredDate.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Preferred Time</label>
                      <input
                        type="time"
                        {...register("preferredTime")}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                      />
                      {errors.preferredTime && <p className="text-red-500 text-xs mt-1 ml-2">{errors.preferredTime.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-text-3 mb-2 ml-2">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message.message}</p>}
                  </div>

                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-cta py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
                    </button>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
