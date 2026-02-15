"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Trophy, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Placements", icon: Trophy },
  { value: "95%", label: "Success Rate", icon: CheckCircle2 },
  { value: "50+", label: "Partner Companies", icon: Globe },
];

const trustedCompanies = [
  "Google", "Amazon", "Meta", "Microsoft", "Apple", "Netflix"
];

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 500+ international professionals</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Your Corporate Career Journey{" "}
            <span className="gradient-text">Starts Here</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            We don&apos;t just help you apply — we help you land your dream job.
            From resume optimization to offer negotiation, we&apos;re with you every step.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center mb-12"
          >
            <Link href="/contact">
              <Button size="lg" variant="gradient">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trusted Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Our clients have landed jobs at top companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {trustedCompanies.map((company) => (
                <span
                  key={company}
                  className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
