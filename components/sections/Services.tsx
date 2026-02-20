  "use client";

  import { motion, Variants } from "framer-motion";
  import Link from "next/link";
  import { Check, ArrowRight, Sparkles } from "lucide-react";
  import { Button } from "@/components/ui/button";

  const plans = [
    {
      name: "Basic",
      emoji: "🟢",
      price: "$1,299",
      tagline: "Focused execution with guided preparation",
      features: [
        "~6,000 applications (50/day)",
        "1 US-based mentor",
        "Resume & LinkedIn optimization",
        "50+ referrals access",
        "Interview preparation",
      ],
      color: "from-emerald-500 to-green-500",
      borderColor: "hover:border-emerald-500/50",
    },
    {
      name: "Elite",
      emoji: "🔵",
      price: "$2,499",
      tagline: "Volume + networking for more interviews",
      features: [
        "~9,000 applications (75/day)",
        "3 US-based mentors",
        "Resume & LinkedIn optimization",
        "400+ referrals access",
        "Automated outreach campaigns",
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500",
      borderColor: "hover:border-blue-500/50",
    },
    {
      name: "Premium",
      emoji: "🔴",
      price: "$4,199",
      tagline: "Full-scale placement + immigration",
      features: [
        "~15,000 applications (120/day)",
        "5 US-based mentors",
        "700+ referrals + job board",
        "50 LinkedIn outreach sequences",
        "O-1 & EB1-A visa support",
      ],
      color: "from-rose-500 to-pink-500",
      borderColor: "hover:border-rose-500/50",
    },
  ];

  const containerVariants :Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants :Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease:[0, 0, 0.2, 1],
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
              <span className="gradient-text">Path to Success</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              No salary commission. No hidden contracts. Just execution.
            </p>
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
                className={`relative group`}
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

                <div
                  className={`h-full bg-card rounded-3xl p-8 border-2 ${
                    plan.popular ? "border-primary shadow-2xl shadow-primary/10" : "border-border"
                  } ${plan.borderColor} transition-all duration-300`}
                >
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{plan.emoji}</span>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">4-month program</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full h-12 ${plan.popular ? "bg-gradient-to-r from-primary to-blue-500 hover:opacity-90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/pricing">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Compare all plans in detail
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
