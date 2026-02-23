"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    emoji: "🟢",
    price: "$1,299",
    description: "For focused execution with guided preparation. Perfect for students targeting 3–5 roles.",
    features: [
      { name: "~6,000 customized job applications (50/day)", included: true },
      { name: "1 US-based industry mentor", included: true },
      { name: "Resume & LinkedIn optimization", included: true },
      { name: "6,000 cold emails to recruiters and managers", included: true },
      { name: "1,000 LinkedIn outreach", included: true },
      { name: "Structured interview preparation", included: true },
      { name: "Internal job board access", included: false },
      { name: "Immigration guidance", included: false },
    ],
    idealFor: "Students who need consistent execution, accountability, and interview readiness.",
    color: "from-emerald-500 to-green-500",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    name: "Elite",
    emoji: "🔵",
    price: "$2,499",
    description: "For higher interview probability through volume + networking. Targeting 5–8 roles.",
    features: [
      { name: "~9,000 customized job applications (75/day)", included: true },
      { name: "3 US-based industry mentors", included: true },
      { name: "Resume & LinkedIn optimization", included: true },
      { name: "12,000 cold emails to recruiters and managers", included: true },
      { name: "3,000 LinkedIn outreach", included: true },
      { name: "Internal job board access", included: false },
      { name: "Immigration guidance", included: false },
    ],
    idealFor: "Candidates who want serious networking leverage and increased interview conversions.",
    popular: true,
    color: "from-blue-500 to-cyan-500",
    borderColor: "hover:border-blue-500/50",
  },
  {
    name: "Premium",
    emoji: "🟠",
    price: "$4,199",
    description: "Full-Scale Placement + Immigration Alignment. Built for aggressive multi-role targeting.",
    features: [
      { name: "~15,000 customized job applications (120/day)", included: true },
      { name: "5 US-based industry mentors", included: true },
      { name: "Resume & LinkedIn optimization", included: true },
      { name: "18,000 cold emails to recruiters and managers", included: true },
      { name: "5,000 LinkedIn outreach", included: true },
      { name: "Internal job board access", included: true },
      { name: "Lawyer & immigration guidance", included: true },
      { name: "O-1 & EB1-A visa strategy support", included: true },
    ],
    idealFor: "Ambitious professionals who want maximum visibility, speed, and strategic immigration positioning.",
    color: "from-yellow-400 to-amber-500",
    borderColor: "hover:border-rose-500/50",
    badge: "Best Value",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Career Acceleration Plans</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="gradient-text">Plan to Success</span>
          </h2>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 bg-gradient-to-r from-primary to-blue-500 text-white text-sm font-medium rounded-full shadow-lg"
                  >
                    Most Popular
                  </motion.span>
                </div>
              )}
              {"badge" in plan && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full shadow-lg"
                  >
                    {plan.badge}
                  </motion.span>
                </div>
              )}

              <div
                className={`h-full bg-card rounded-3xl p-8 border-2 ${
                  plan.popular ? "border-primary shadow-2xl shadow-primary/10" : "border-border"
                } ${plan.borderColor} transition-all duration-300`}
              >
                {/* Plan Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{plan.emoji}</span>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">4-month program</p>
                  <span className="inline-block text-xs text-amber-500 font-semibold mt-2 px-2 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/30 animate-pulse">EMI Available</span>
                </div>

                {/* CTA */}
                <Link href="/contact" className="block mb-6">
                  <Button
                    className={`w-full h-12 ${plan.popular ? "bg-gradient-to-r from-primary to-blue-500 hover:opacity-90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-start gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "" : "text-muted-foreground/50"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    {plan.idealFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
