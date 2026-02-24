"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Calendar, MessageSquare, CheckCircle2, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import FAQ from "@/components/sections/FAQ";

const contactEmail = "services@thebreakin.org";

const reasons = [
  "Free career assessment",
  "Visa sponsorship options",
  "Mock interviews",
  "Resume feedback",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [consultationEmail, setConsultationEmail] = useState("");
  const [consultationDate, setConsultationDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...formState,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleScheduleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationEmail || !consultationDate) return;

    setIsScheduling(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "consultation",
          email: consultationEmail,
          preferredDate: consultationDate,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsScheduled(true);
      setConsultationEmail("");
      setConsultationDate("");
    } catch (error) {
      console.error("Error scheduling consultation:", error);
      alert("Failed to schedule. Please try again.");
    } finally {
      setIsScheduling(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Compact Hero Section */}
      <section className="py-10 lg:py-14 bg-muted/30">
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
              Book a free consultation or send us a message. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section - Side by Side Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Book Consultation Card - Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="gradient-bg text-white h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {isScheduled ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 flex-1 flex flex-col justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Consultation Scheduled!</h3>
                      <p className="text-white/80 mb-4">
                        Our team will contact you within 24 hours to confirm your consultation time.
                      </p>
                      <p className="text-white/60 text-sm">
                        You&apos;ll receive confirmation at your email address.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                        <Calendar className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Book a Free Consultation</h2>
                      <p className="text-white/80 mb-6 flex-1">
                        Schedule a 30-minute call with our career experts. We&apos;ll assess your profile
                        and create a personalized action plan to help you land your dream job.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3 text-white/90">
                          <CheckCircle2 className="w-5 h-5 text-white/70" />
                          <span>Profile assessment</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                          <CheckCircle2 className="w-5 h-5 text-white/70" />
                          <span>Personalized action plan</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/90">
                          <CheckCircle2 className="w-5 h-5 text-white/70" />
                          <span>Visa pathway guidance</span>
                        </li>
                      </ul>
                      <form onSubmit={handleScheduleConsultation} className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={consultationEmail}
                          onChange={(e) => setConsultationEmail(e.target.value)}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                        <div>
                          <label className="block text-sm text-white/80 mb-1.5">
                            Preferred Date *
                          </label>
                          <Input
                            type="date"
                            value={consultationDate}
                            onChange={(e) => setConsultationDate(e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 [&::-webkit-calendar-picker-indicator]:invert"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-white text-primary hover:bg-white/90"
                          disabled={isScheduling}
                        >
                          {isScheduling ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Scheduling...
                            </>
                          ) : (
                            <>
                              Schedule Now
                              <Calendar className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Send Message Card - Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
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
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your background and goals..."
                          rows={4}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
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
