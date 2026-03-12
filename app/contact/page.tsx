"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";
import FAQ from "@/components/sections/FAQ";

const contactEmail = "services@thebreakin.org";
const calendlyBaseUrl = "https://calendly.com/thebreakin/30min";

const reasons = [
  "Free career assessment",
  "Visa sponsorship options",
  "Mock interviews",
  "Resume feedback",
];

function ContactContent() {
  const searchParams = useSearchParams();
  const justBooked = searchParams.get('booked') === 'true';

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Step 1: Send email
      const formDataToSend = new FormData();
      formDataToSend.append("type", "contact");
      formDataToSend.append("name", formState.name);
      formDataToSend.append("email", formState.email);
      formDataToSend.append("phone", formState.phone);
      formDataToSend.append("subject", formState.subject);
      formDataToSend.append("message", formState.message);

      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      // Step 2: Redirect to Calendly
      const calendlyUrl = new URL(calendlyBaseUrl);
      if (formState.name) {
        calendlyUrl.searchParams.set("name", formState.name);
      }
      if (formState.email) {
        calendlyUrl.searchParams.set("email", formState.email);
      }

      window.location.href = calendlyUrl.toString();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Booking Success Banner */}
      {justBooked && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border-b border-green-500/20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <p className="text-green-700 font-medium">
                Thanks for booking! We&apos;ll see you soon.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Compact Hero Section */}
      <section className="py-8 lg:py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book a free consultation with our career experts. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section - Single Centered Card */}
      <section className="py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="gradient-bg text-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold">Book a Consultation</h2>
                  </div>

                  <p className="text-white/80 mb-6">
                    Schedule a 30-minute call with our career experts. We&apos;ll assess your profile
                    and create a personalized action plan to help you land your dream job.
                  </p>

                  <form onSubmit={handleBookConsultation} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                          Phone <span className="text-white/50">(optional)</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1.5">
                          Subject <span className="text-white/50">(optional)</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                        Message <span className="text-white/50">(optional)</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your background and goals..."
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Resume <span className="text-white/50">(optional)</span>
                      </label>
                      <FileUpload
                        onFileChange={setResumeFile}
                        accept=".pdf,.doc,.docx"
                        labelClassName="bg-white/10 border-white/20 text-white hover:border-white/40 hover:bg-white/20"
                      />
                      <p className="text-xs text-white/50 mt-1">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-300 text-center">{submitError}</p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-white/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Book a Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Contact Methods */}
            <div className="flex justify-center">
              {/* Email */}
              <div className="flex items-center gap-4 p-5 bg-muted/50 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center justify-center gap-3 p-4 bg-green-500/10 rounded-xl">
              <Clock className="w-5 h-5 text-green-500" />
              <p className="text-sm">
                <span className="text-muted-foreground">Response time:</span>{" "}
                <span className="font-semibold text-green-500">Under 24 hours</span>
              </p>
            </div>

            {/* Reasons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {reasons.map((reason) => (
                <span
                  key={reason}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  {reason}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen" />}>
      <ContactContent />
    </Suspense>
  );
}
