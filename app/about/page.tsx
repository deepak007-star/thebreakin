"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Heart, Users, Zap, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CTA from "@/components/sections/CTA";

const stats = [
  { value: "500+", label: "Successful Placements" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Partner Companies" },
  { value: "30+", label: "Countries Served" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by your success. Every service is designed to maximize your chances of landing your dream job.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "You're not just a number. We take the time to understand your unique situation, goals, and challenges.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We've built a supportive community of professionals who help each other succeed in their US career journeys.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description: "We constantly evolve our methods, leveraging AI and human expertise to stay ahead of the job market.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    bio: "Former Google recruiter who saw firsthand the challenges international talent faces.",
  },
  {
    name: "Maria Santos",
    role: "Head of Career Services",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    bio: "15+ years helping professionals navigate career transitions and visa processes.",
  },
  {
    name: "David Park",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    bio: "Built AI-powered tools that help match candidates with the perfect opportunities.",
  },
  {
    name: "Priya Mehta",
    role: "Head of Mentorship",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    bio: "Connects international professionals with mentors from top companies worldwide.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a mission to help international talent break into the US market." },
  { year: "2021", title: "100 Placements", description: "Reached our first major milestone with placements at top tech companies." },
  { year: "2022", title: "AI Integration", description: "Launched AI-powered resume optimization and job matching tools." },
  { year: "2023", title: "Mentor Network", description: "Built a network of 50+ mentors from FAANG and Fortune 500 companies." },
  { year: "2024", title: "500+ Success Stories", description: "Celebrated 500+ successful job placements across all industries." },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Empowering Global Talent to{" "}
              <span className="gradient-text">Break In</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We started thebreakin because we believe talented professionals shouldn&apos;t be
              held back by borders. Our mission is to make the US job market accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why We Started{" "}
                <span className="gradient-text">thebreakin</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As former recruiters and international professionals ourselves, we experienced
                  firsthand the challenges of breaking into the US job market. The visa complexities,
                  the cultural differences in job searching, and the sheer competition can be overwhelming.
                </p>
                <p>
                  We saw countless talented individuals struggle—not because they lacked skills, but
                  because they didn&apos;t have the right guidance and support. Resume formats that work
                  in other countries often fail in the US. Interview styles differ. And navigating the
                  visa sponsorship landscape is a maze.
                </p>
                <p>
                  That&apos;s why we built thebreakin. We combine human expertise with AI-powered tools
                  to give international professionals the best possible chance at landing their dream
                  jobs in the United States.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="gradient" className="mt-8">
                  Join Our Community
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white" />
                  </div>
                  <div className="h-32 rounded-2xl bg-muted flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl bg-muted flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at thebreakin.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The people behind thebreakin who are passionate about helping you succeed.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Key milestones in our mission to help global talent break into the US market.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
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
