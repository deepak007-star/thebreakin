"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Send,
  MessageSquare,
  Globe,
  Users,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Resume Optimization",
    description: "ATS-optimized resumes with AI keyword mapping. Get past the bots and into recruiter hands.",
    icon: FileText,
    href: "/services#resume",
    features: ["ATS Score Analysis", "Keyword Optimization", "LinkedIn Profile"],
  },
  {
    title: "Job Applications",
    description: "We apply to verified roles daily on your behalf. Track everything from your personal dashboard.",
    icon: Send,
    href: "/services#applications",
    features: ["70+ Daily Applications", "Application Tracking", "Recruiter Outreach"],
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews with industry experts. Master STAR method and technical rounds.",
    icon: MessageSquare,
    href: "/services#interview",
    features: ["Mock Interviews", "STAR Coaching", "Technical Prep"],
  },
  {
    title: "Visa Guidance",
    description: "Navigate H1B, OPT, STEM OPT, and other visa pathways with expert support.",
    icon: Globe,
    href: "/services#visa",
    features: ["H1B Strategy", "OPT/STEM OPT", "Green Card Path"],
  },
  {
    title: "Mentorship Programs",
    description: "1:1 mentorship with professionals from top companies. Get insider career guidance.",
    icon: Users,
    href: "/services#mentorship",
    features: ["1:1 Sessions", "Career Roadmap", "Industry Insights"],
  },
  {
    title: "Portfolio Building",
    description: "Showcase your work with a professional portfolio. Stand out from the competition.",
    icon: Briefcase,
    href: "/services#portfolio",
    features: ["Portfolio Review", "Project Guidance", "GitHub Optimization"],
  },
];

export default function Services() {
  return (
    <section className="py-24">
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Land Your Dream Job</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive support from resume to offer. We handle the heavy lifting
            so you can focus on preparing for your new career.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button size="lg" variant="outline" className="h-12 px-8">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
