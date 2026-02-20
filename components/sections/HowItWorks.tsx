"use client";

import { motion } from "framer-motion";
import { UserCircle, Target, Zap, Users, Award } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Profile Positioning",
    description: "Resume & LinkedIn optimized for recruiter algorithms",
    icon: UserCircle,
    color: "from-violet-500 to-purple-600",
  },
  {
    step: "02",
    title: "Role Targeting",
    description: "Define exact roles, industries & companies for you",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Application Engine",
    description: "High-volume customized applications daily",
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: "04",
    title: "Referral Network",
    description: "Activate referrals & automated outreach",
    icon: Users,
    color: "from-orange-500 to-amber-500",
  },
  {
    step: "05",
    title: "Interview Mastery",
    description: "Corporate mentors for all interview preps",
    icon: Award,
    color: "from-pink-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
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
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our 5-Step System
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How You{" "}
            <span className="gradient-text">Get the Job</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven system that engineers outcomes through strategy and execution.
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 via-emerald-500 via-orange-500 to-pink-500 opacity-30" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step Badge */}
                  <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded mb-3">
                    Step {step.step}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector Dot */}
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}>
                  <div className="absolute inset-1 bg-card rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:hidden grid sm:grid-cols-2 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded mb-2">
                      Step {step.step}
                    </span>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
