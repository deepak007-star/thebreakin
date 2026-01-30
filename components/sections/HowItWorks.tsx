"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, FileCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Upload your resume and portfolio. Tell us about your career goals and visa status.",
    icon: UserPlus,
    color: "from-violet-500 to-purple-500",
  },
  {
    step: "02",
    title: "We Find Opportunities",
    description: "Our AI matches you with relevant jobs. Our team curates the best visa-sponsoring positions.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Expert Application Support",
    description: "We tailor your resume for each role. Our recruiters submit applications on your behalf.",
    icon: FileCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: "04",
    title: "Land Your Dream Job",
    description: "Get interview coaching and offer negotiation support. We help until you sign that offer letter.",
    icon: PartyPopper,
    color: "from-orange-500 to-amber-500",
  },
];

export default function HowItWorks() {
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Path to a{" "}
            <span className="gradient-text">US Career</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven 4-step process that has helped hundreds of international
            professionals land their dream jobs in the United States.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                {/* Step Number */}
                <span className="absolute -top-4 left-6 px-3 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full">
                  Step {step.step}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
