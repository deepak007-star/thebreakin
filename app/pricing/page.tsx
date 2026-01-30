"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQ from "@/components/sections/FAQ";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting started with your job search",
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      { name: "Resume optimization (ATS-ready)", included: true },
      { name: "10 job applications per week", included: true },
      { name: "Basic interview tips guide", included: true },
      { name: "Application tracking dashboard", included: true },
      { name: "Email support", included: true },
      { name: "LinkedIn optimization", included: false },
      { name: "Mock interviews", included: false },
      { name: "Dedicated recruiter", included: false },
      { name: "Mentor sessions", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Most popular choice for serious job seekers",
    monthlyPrice: 599,
    yearlyPrice: 499,
    features: [
      { name: "Resume optimization (ATS-ready)", included: true },
      { name: "30 job applications per week", included: true },
      { name: "LinkedIn profile makeover", included: true },
      { name: "Application tracking dashboard", included: true },
      { name: "2 mock interviews per month", included: true },
      { name: "Dedicated recruiter", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "Salary negotiation guidance", included: true },
      { name: "Weekly mentor sessions", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    description: "Maximum support for guaranteed results",
    monthlyPrice: 999,
    yearlyPrice: 849,
    features: [
      { name: "Resume optimization (ATS-ready)", included: true },
      { name: "Unlimited job applications", included: true },
      { name: "LinkedIn profile makeover", included: true },
      { name: "Application tracking dashboard", included: true },
      { name: "Unlimited mock interviews", included: true },
      { name: "Senior dedicated recruiter", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Salary negotiation support", included: true },
      { name: "Weekly 1:1 mentor sessions", included: true },
    ],
    cta: "Get Premium",
    popular: false,
    badge: "Best Value",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "If you don't get interview calls within 30 days, we'll refund your first month.",
  },
  {
    icon: Sparkles,
    title: "Interview Guarantee",
    description: "Premium members get guaranteed interviews or we extend your service for free.",
  },
];

const comparisonFeatures = [
  "Resume Optimization",
  "Weekly Applications",
  "LinkedIn Makeover",
  "Mock Interviews",
  "Dedicated Recruiter",
  "Mentor Sessions",
  "Visa Guidance",
  "Salary Negotiation",
  "Priority Support",
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

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
              Choose the plan that fits your needs. All plans include our core services
              with a money-back guarantee.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Tabs value={billingCycle} onValueChange={(v) => setBillingCycle(v as "monthly" | "yearly")}>
                <TabsList className="grid w-64 grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <Badge className="ml-2 bg-green-500 text-white text-xs">Save 17%</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
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
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </p>
                    )}
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
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/50"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
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

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 font-medium">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-primary">Professional</th>
                  <th className="text-center py-4 px-4 font-medium">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Resume Optimization</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Weekly Applications</td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4 bg-primary/5">30</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">LinkedIn Makeover</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Mock Interviews</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5">2/month</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Dedicated Recruiter</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4">Senior</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Mentor Sessions</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4 bg-primary/5"><X className="w-5 h-5 text-muted-foreground/30 mx-auto" /></td>
                  <td className="text-center py-4 px-4">Weekly</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Priority Support</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4 bg-primary/5">Email & Chat</td>
                  <td className="text-center py-4 px-4">24/7</td>
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
