"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7c3aed]/40 to-[#1e40af]/40 backdrop-blur-3xl border border-white/20 p-8 lg:p-16 shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Limited spots available this month</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Break Into the US Market?
            </h2>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ professionals who have successfully landed their dream jobs
              with our help. Your US career journey starts with a single step.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Free consultation
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Money-back guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
