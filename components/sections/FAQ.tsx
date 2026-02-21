"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does thebreakin help with my job search?",
    answer: "We provide end-to-end support: optimizing your resume for ATS systems, applying to jobs on your behalf, preparing you for interviews, and negotiating offers. Our team of recruiters and career coaches work with you personally to ensure your success.",
  },
  {
    question: "Do you only help with tech jobs?",
    answer: "While we have strong expertise in tech roles, we help professionals across various industries including finance, healthcare, consulting, and more. Our services are tailored to your specific field and career goals.",
  },
  {
    question: "Do you help with career transitions?",
    answer: "Absolutely! We specialize in helping professionals make successful career transitions. Whether you're switching industries or moving up the corporate ladder, we provide tailored guidance and support throughout the process.",
  },
  {
    question: "How many jobs do you apply to per week?",
    answer: "Depending on your plan, we apply to 10-70+ targeted positions per week. Unlike spray-and-pray approaches, we focus on quality applications with tailored resumes for each role, significantly improving your response rate.",
  },
  {
    question: "How long does it typically take to land a job?",
    answer: "Most of our clients receive interview calls within 2-4 weeks and secure offers within 2-3 months. However, timelines vary based on your experience level, target roles, and market conditions. We're committed to supporting you until you succeed.",
  },
  {
    question: "What makes thebreakin different from other services?",
    answer: "Unlike automated services, we provide personalized support with real recruiters who understand the corporate job market. Our 95% success rate speaks for itself. We combine AI-powered tools with human expertise to maximize your chances.",
  },
  {
    question: "Do you offer refunds if I don't get a job?",
    answer: "Yes! We offer a satisfaction guarantee. If you follow our guidance and don't receive interview calls within a specified timeframe, we'll extend your service or provide a partial refund. Check our pricing page for specific terms.",
  },
  {
    question: "Can I speak with someone before signing up?",
    answer: "Of course! We offer free 30-minute consultation calls where we assess your profile, discuss your goals, and recommend the best approach. Book your free call through our contact page.",
  },
];

export default function FAQ() {
  return (
    <section className="py-18">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              FAQ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground">
              Everything you need to know about our services.
            </p> */}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
