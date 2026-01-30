"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  Video,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTA from "@/components/sections/CTA";

const templates = [
  {
    title: "ATS-Optimized Resume Template",
    description: "Professional resume template that passes 99% of ATS systems",
    category: "Resume",
    downloads: "12,500+",
    format: "DOCX, PDF",
    icon: FileText,
  },
  {
    title: "Tech Industry Resume Template",
    description: "Specifically designed for software engineering and tech roles",
    category: "Resume",
    downloads: "8,200+",
    format: "DOCX, PDF",
    icon: FileText,
  },
  {
    title: "Cover Letter Template Pack",
    description: "5 customizable cover letter templates for different industries",
    category: "Cover Letter",
    downloads: "6,800+",
    format: "DOCX",
    icon: FileText,
  },
  {
    title: "LinkedIn Profile Checklist",
    description: "Step-by-step guide to optimize your LinkedIn for recruiters",
    category: "LinkedIn",
    downloads: "9,100+",
    format: "PDF",
    icon: CheckCircle2,
  },
];

const guides = [
  {
    title: "The Ultimate H1B Visa Guide",
    description: "Everything you need to know about the H1B visa process, lottery, and sponsorship",
    readTime: "15 min read",
    category: "Visa",
    featured: true,
  },
  {
    title: "STAR Method Interview Guide",
    description: "Master behavioral interviews with the STAR method framework",
    readTime: "10 min read",
    category: "Interview",
    featured: true,
  },
  {
    title: "Salary Negotiation Playbook",
    description: "Proven strategies to negotiate your offer and maximize compensation",
    readTime: "12 min read",
    category: "Negotiation",
    featured: false,
  },
  {
    title: "Breaking Into FAANG Companies",
    description: "Insider tips on how to land roles at Google, Amazon, Meta, Apple, and Netflix",
    readTime: "20 min read",
    category: "Career",
    featured: true,
  },
  {
    title: "OPT to Green Card Roadmap",
    description: "Your complete guide to transitioning from OPT to permanent residency",
    readTime: "18 min read",
    category: "Visa",
    featured: false,
  },
  {
    title: "Remote Job Search Strategy",
    description: "How to find and land remote positions at US companies",
    readTime: "8 min read",
    category: "Job Search",
    featured: false,
  },
];

const blogPosts = [
  {
    title: "5 Resume Mistakes That Kill Your ATS Score",
    excerpt: "Avoid these common errors that cause your resume to get rejected before a human ever sees it.",
    date: "Jan 25, 2024",
    readTime: "5 min",
    category: "Resume Tips",
  },
  {
    title: "How I Landed a Google Offer in 3 Months",
    excerpt: "A detailed breakdown of my job search strategy and interview preparation process.",
    date: "Jan 20, 2024",
    readTime: "8 min",
    category: "Success Story",
  },
  {
    title: "2024 Tech Hiring Trends You Need to Know",
    excerpt: "What's changed in tech hiring and how to adapt your job search accordingly.",
    date: "Jan 15, 2024",
    readTime: "6 min",
    category: "Industry Insights",
  },
  {
    title: "The Truth About H1B Visa Sponsorship",
    excerpt: "Debunking myths and sharing real data about which companies actually sponsor visas.",
    date: "Jan 10, 2024",
    readTime: "10 min",
    category: "Visa Insights",
  },
];

const categories = ["All", "Resume", "Interview", "Visa", "Career", "Negotiation"];

export default function ResourcesPage() {
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
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Free Tools to{" "}
              <span className="gradient-text">Accelerate Your Success</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Download templates, read guides, and learn from success stories.
              Everything you need to land your dream job in the US.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Free Templates</h2>
            <p className="text-muted-foreground">
              Download our professionally crafted templates used by thousands of successful job seekers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <template.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-3">{template.category}</Badge>
                    <h3 className="font-semibold mb-2">{template.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{template.downloads} downloads</span>
                      <span>{template.format}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">In-Depth Guides</h2>
            <p className="text-muted-foreground">
              Comprehensive guides written by career experts and successful job seekers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow ${guide.featured ? "border-primary" : ""}`}>
                  <CardContent className="p-6">
                    {guide.featured && (
                      <div className="flex items-center gap-1 text-amber-500 mb-3">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                    <Badge variant="secondary" className="mb-3">{guide.category}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {guide.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-muted-foreground">
                Tips, insights, and success stories from the thebreakin community.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm text-muted-foreground">• {post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Get Weekly Career Tips</h2>
            <p className="text-muted-foreground mb-8">
              Join 10,000+ professionals receiving our weekly newsletter with job search tips,
              visa updates, and exclusive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
