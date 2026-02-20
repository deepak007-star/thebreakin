"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Check, AlertCircle, Frown, Clock, FileX, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: FileX,
    title: "Sending 100s of applications",
    subtitle: "with zero response?",
    description: "Your resume gets lost in ATS systems. No one sees your actual skills.",
  },
  {
    icon: Frown,
    title: "Getting rejected",
    subtitle: "despite being qualified?",
    description: "Recruiters don't see your true potential. Your profile needs professional optimization.",
  },
  {
    icon: AlertCircle,
    title: "Struggling to stand out",
    subtitle: "in a competitive market?",
    description: "Without the right connections, your applications get buried in the pile.",
  },
  {
    icon: Clock,
    title: "Job search taking",
    subtitle: "months with no progress?",
    description: "Without a system, it's a numbers game you're losing. Time is running out.",
  },
];

const solutions = [
  {
    icon: Check,
    title: "50-120 Applications Daily",
    subtitle: "We do it FOR you",
    description: "Our team sends targeted applications on your behalf. You focus on preparing, not applying.",
    highlight: "6,000-15,000 applications in 4 months",
  },
  {
    icon: Check,
    title: "Expert Mentors Optimize",
    subtitle: "your entire profile",
    description: "Industry experts rewrite your resume for top recruiters. ATS-optimized + LinkedIn makeover.",
    highlight: "95% interview rate",
  },
  {
    icon: Check,
    title: "700+ Referrals +",
    subtitle: "Direct Connections",
    description: "One-click access to company referrals. Get connected directly to hiring managers.",
    highlight: "Premium: Executive support",
  },
  {
    icon: Check,
    title: "Guaranteed Results",
    subtitle: "in 4 months or less",
    description: "Our systematic approach gets you interviews fast. If not, we extend your service free.",
    highlight: "4.2 months average to offer",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            The Problem → The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why Job Seekers{" "}
            <span className="text-red-500">Struggle</span>
            {" "}& How We{" "}
            <span className="gradient-text">Guarantee Success</span>
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold">The Struggle Is Real</h3>
            </div>

            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border-l-4 border-red-500 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {problem.title}{" "}
                      <span className="text-red-500">{problem.subtitle}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">Our Solution Works</h3>
            </div>

            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-l-4 border-green-500 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {solution.title}{" "}
                      <span className="gradient-text">{solution.subtitle}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {solution.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                      ✓ {solution.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/pricing">
            <Button
              size="lg"
              variant="gradient"
              className="h-14 px-8 text-lg shadow-xl"
            >
              See How Our Plans Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            Choose from 3 plans designed to get you hired fast
          </p>
        </motion.div>
      </div>
    </section>
  );
}
