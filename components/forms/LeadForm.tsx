"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LeadFormProps {
  referrer: string;
  variant?: "hero" | "standalone";
  className?: string;
}

export default function LeadForm({ referrer, variant = "hero", className }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead",
          name: formData.name,
          email: formData.email,
          linkedin: formData.linkedin,
          referrer,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Redirect to Calendly on success
      const calendlyUrl = new URL("https://calendly.com/thebreakin/30min");
      calendlyUrl.searchParams.set("name", formData.name);
      calendlyUrl.searchParams.set("email", formData.email);
      calendlyUrl.searchParams.set("a1", referrer);
      window.location.href = calendlyUrl.toString();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const isHero = variant === "hero";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`w-full max-w-md mx-auto ${className || ""}`}
    >
      <div className={`space-y-4 ${isHero ? "p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border" : ""}`}>
        {/* Hidden referrer field */}
        <input type="hidden" name="referrer" value={referrer} />

        <div>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 bg-background/80 border-border/50 focus:border-primary"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 bg-background/80 border-border/50 focus:border-primary"
          />
        </div>

        <div>
          <Input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            value={formData.linkedin}
            onChange={handleChange}
            required
            className="h-12 bg-background/80 border-border/50 focus:border-primary"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive text-center">{error}</p>
        )}

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full h-12 text-base group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to receive career guidance communications.
        </p>
      </div>
    </motion.form>
  );
}
