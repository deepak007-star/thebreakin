"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FAQ from "@/components/sections/FAQ";

const plans = [
  {
    name: "Basic Plan",
    description: "Designed for students targeting 3–5 focused roles with structured application momentum.",
    price: 1299,
    features: [
      { name: "Minimum 50 customized job applications per day for up to 4 months", included: true },
      { name: "Total ~6,000 applications", included: true },
      { name: "1 US-based working mentor (industry-aligned)", included: true },
      { name: "Resume & LinkedIn optimization for enhanced recruiter visibility", included: true },
      { name: "50+ referrals accessible with one-click system", included: true },
      { name: "Automated cold emailing and LinkedIn networking", included: false },
      { name: "Internal job board access", included: false },
      { name: "Immigration guidance", included: false },
    ],
    idealFor: "Ideal for students who need structured execution and guided preparation without advanced networking automation.",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Elite Plan",
    description: "Designed for students targeting 5–8 roles with stronger networking leverage and referral depth.",
    price: 2499,
    features: [
      { name: "Minimum 75 customized applications per day for up to 4 months", included: true },
      { name: "Total ~9,000 applications", included: true },
      { name: "3 US-based industry mentors", included: true },
      { name: "Resume & LinkedIn optimization", included: true },
      { name: "400+ referrals accessible", included: true },
      { name: "Automated cold emailing and LinkedIn networking to corporate professionals", included: true },
      { name: "Internal job board access", included: false },
      { name: "Immigration guidance", included: false },
    ],
    idealFor: "This plan significantly increases interview probability through volume + referral + active outreach strategy.",
    cta: "Start Elite Plan",
    popular: true,
  },
  {
    name: "Premium Plan",
    description: "Designed for aggressive, multi-role targeting with full-stack placement and immigration alignment support.",
    price: 4199,
    features: [
      { name: "Minimum 120 customized applications per day for 4 months", included: true },
      { name: "Total ~15,000 applications", included: true },
      { name: "Unlimited role targeting", included: true },
      { name: "5 US-based industry mentors", included: true },
      { name: "Resume & LinkedIn optimization", included: true },
      { name: "700+ referrals accessible", included: true },
      { name: "Automated LinkedIn outreach (50 unique professional outreach sequences)", included: true },
      { name: "Internal job board access", included: true },
      { name: "Lawyer and immigration guidance", included: true },
      { name: "O-1 and EB1-A visa support strategy", included: true },
    ],
    idealFor: "Best for students seeking comprehensive support with immigration alignment and maximum outreach.",
    cta: "Get Premium",
    popular: false,
    badge: "Best Value",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Results-Driven Approach",
    description: "Our systematic application strategy is designed to maximize your interview opportunities through volume and targeted outreach.",
  },
  {
    icon: Sparkles,
    title: "Industry Mentorship",
    description: "Get guidance from US-based mentors who understand your target industry and can help you prepare for success.",
  },
];

export default function PricingPage() {
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
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Invest in Your{" "}
              <span className="gradient-text">Future</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that fits your needs. All plans include 4 months of comprehensive support
              with a results-driven approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="gradient-bg text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-amber-500 text-white px-4 py-1">{plan.badge}</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? "border-primary shadow-xl scale-105" : ""}`}>
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-bold">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm block mt-2">4-month program</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Link href="/contact">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "gradient" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? "" : "text-muted-foreground/50"}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {plan.idealFor && (
                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground italic">
                          {plan.idealFor}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <guarantee.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                    <p className="text-muted-foreground text-sm">{guarantee.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
            <p className="text-muted-foreground">See what&apos;s included in each plan</p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 font-medium">Basic</th>
                  <th className="text-center py-4 px-4 font-medium text-primary">Elite</th>
                  <th className="text-center py-4 px-4 font-medium">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Daily Applications</td>
                  <td className="text-center py-4 px-4">50/day</td>
                  <td className="text-center py-4 px-4 bg-primary/5">75/day</td>
                  <td className="text-center py-4 px-4">120/day</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Total Applications (4 months)</td>
                  <td className="text-center py-4 px-4">~6,000</td>
                  <td className="text-center py-4 px-4 bg-primary/5">~9,000</td>
                  <td className="text-center py-4 px-4">~15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">US-based Industry Mentors</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4 bg-primary/5">3</td>
                  <td className="text-center py-4 px-4">5</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Resume & LinkedIn Optimization</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Referrals Accessible</td>
                  <td className="text-center py-4 px-4">50+</td>
                  <td className="text-center py-4 px-4 bg-primary/5">400+</td>
                  <td className="text-center py-4 px-4">700+</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Automated Cold Emailing & LinkedIn Networking</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Automated LinkedIn Outreach Sequences</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4">50 sequences</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Internal Job Board Access</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Lawyer & Immigration Guidance</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">O-1 and EB1-A Visa Support</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Role Targeting</td>
                  <td className="text-center py-4 px-4">3–5 roles</td>
                  <td className="text-center py-4 px-4 bg-primary/5">5–8 roles</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free 30-minute consultation to discuss your needs and find the right plan for you.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
