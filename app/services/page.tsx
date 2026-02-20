"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Send,
  MessageSquare,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CTA from "@/components/sections/CTA";

const services = [
  {
    id: "resume",
    title: "Resume & LinkedIn Optimization",
    description: "Get past ATS systems and into recruiter hands with professionally optimized profiles.",
    icon: FileText,
    color: "from-violet-500 to-purple-500",
    features: [
      "ATS score analysis and optimization",
      "Keyword mapping for target roles",
      "LinkedIn profile makeover",
      "Cover letter templates",
      "Before/after comparison",
      "Multiple format exports (PDF, DOCX)",
    ],
    stats: { value: "99%", label: "ATS Pass Rate" },
  },
  {
    id: "applications",
    title: "Job Application Service",
    description: "We apply to verified roles at top companies daily on your behalf.",
    icon: Send,
    color: "from-blue-500 to-cyan-500",
    features: [
      "70+ targeted applications per week",
      "Real-time application tracking",
      "Recruiter follow-up emails",
      "Company research and matching",
      "Priority top employers",
      "Weekly progress reports",
    ],
    stats: { value: "70+", label: "Weekly Applications" },
  },
  {
    id: "interview",
    title: "Interview Preparation",
    description: "Master every interview format with personalized coaching from industry experts.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-500",
    features: [
      "Mock interviews with real feedback",
      "STAR method coaching",
      "Technical interview prep",
      "Behavioral question bank",
      "Salary negotiation training",
      "Company-specific preparation",
    ],
    stats: { value: "85%", label: "Offer Conversion" },
  },
  {
    id: "mentorship",
    title: "Mentorship Programs",
    description: "Get 1:1 guidance from professionals at top companies.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    features: [
      "Mentor matching by industry",
      "Weekly 1:1 sessions",
      "Career roadmap planning",
      "Industry insider insights",
      "Network expansion",
      "Long-term career guidance",
    ],
    stats: { value: "50+", label: "Expert Mentors" },
  },
  {
    id: "portfolio",
    title: "Portfolio Building",
    description: "Showcase your work professionally and stand out from the competition.",
    icon: Briefcase,
    color: "from-indigo-500 to-violet-500",
    features: [
      "Portfolio website creation",
      "Project case studies",
      "GitHub profile optimization",
      "Work sample curation",
      "Personal branding",
      "Online presence audit",
    ],
    stats: { value: "3x", label: "More Callbacks" },
  },
];

const benefits = [
  {
    icon: Target,
    title: "Targeted Approach",
    description: "We focus on quality over quantity, targeting roles that match your profile and career goals.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Most clients receive interview calls within 2-4 weeks of starting our program.",
  },
  {
    icon: Shield,
    title: "Risk-Free",
    description: "Our satisfaction guarantee ensures you get results or your money back.",
  },
  {
    icon: Award,
    title: "Proven Success",
    description: "95% of our clients land jobs at their target companies within 3 months.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive career support from resume optimization to offer negotiation.
              We handle the heavy lifting so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button variant="gradient">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Stats Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="bg-muted/50 border-none">
                    <CardContent className="p-12 text-center">
                      <div className={`text-7xl font-bold bg-gradient-to-br ${service.color} bg-clip-text text-transparent mb-4`}>
                        {service.stats.value}
                      </div>
                      <div className="text-xl text-muted-foreground">{service.stats.label}</div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
