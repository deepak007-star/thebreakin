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
    description: "Your resume isn't reaching recruiters. We fix that.",
  },
  {
    icon: Frown,
    title: "Getting rejected",
    subtitle: "despite being qualified?",
    description: "Your profile isn't positioned right. We optimize it.",
  },
  {
    icon: AlertCircle,
    title: "Struggling to stand out",
    subtitle: "in a competitive market?",
    description: "The right strategy makes you visible. We provide it.",
  },
  {
    icon: Clock,
    title: "Job search taking",
    subtitle: "months with no progress?",
    description: "Without a system, results slow down. We speed them up.",
  },
];

const solutions = [
  {
    icon: Check,
    title: "50-120 Applications Daily —",
    subtitle: "We do it FOR you",
    description: "We apply on your behalf. You focus on interviews.",
  },
  {
    icon: Check,
    title: "Guaranteed Results",
    subtitle: "in 8 weeks or less",
    description: "Interviews fast — or we extend support free.",
  },
  {
    icon: Check,
    title: "Expert Mentors Optimize",
    subtitle: "your entire profile",
    description: "ATS-ready resume + LinkedIn makeover by experts.",
  },
  {
    icon: Check,
    title: "Cold Emails to Recruiters +",
    subtitle: "Direct Connections",
    description: "Direct outreach to recruiters and hiring managers.",
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
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-end">
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
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Partner Message */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 text-xl sm:text-2xl font-semibold text-primary"
        >
          Think of us as your career partner until you land the job you deserve.
        </motion.p> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
        </motion.div>
      </div>
    </section>
  );
}
