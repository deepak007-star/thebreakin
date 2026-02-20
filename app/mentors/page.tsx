"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Filter, Star, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/sections/CTA";

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    expertise: ["Software Engineering", "System Design", "Career Growth"],
    experience: "8+ years",
    rating: 4.9,
    reviews: 47,
    location: "Remote",
    bio: "Passionate about helping others break into tech. Expert at system design interviews.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    expertise: ["Product Management", "Strategy", "User Research"],
    experience: "10+ years",
    rating: 4.8,
    reviews: 62,
    location: "Remote",
    bio: "Led product teams across 3 FAANG companies. Specializes in career pivots into PM roles.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Data Science Lead",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    expertise: ["Data Science", "Machine Learning", "Interview Prep"],
    experience: "7+ years",
    rating: 5.0,
    reviews: 38,
    location: "Remote",
    bio: "Helps aspiring data scientists land roles at top tech companies.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Engineering Manager",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    expertise: ["Engineering Leadership", "Team Building", "Tech Strategy"],
    experience: "12+ years",
    rating: 4.9,
    reviews: 55,
    location: "Remote",
    bio: "Built and led engineering teams of 50+. Expert at navigating corporate ladder in big tech.",
  },
  {
    id: 5,
    name: "Emily Zhang",
    role: "UX Design Director",
    company: "Apple",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
    expertise: ["UX Design", "Portfolio Review", "Design Systems"],
    experience: "9+ years",
    rating: 4.7,
    reviews: 41,
    location: "Remote",
    bio: "From design student to Apple director. Passionate about design education.",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Staff Engineer",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    expertise: ["Backend Systems", "Distributed Systems", "System Design"],
    experience: "11+ years",
    rating: 4.9,
    reviews: 33,
    location: "Remote",
    bio: "Architect of Netflix's core streaming infrastructure. Expert at cracking staff-level interviews.",
  },
];

const filters = {
  expertise: ["All", "Software Engineering", "Product Management", "Data Science", "UX Design", "Engineering Leadership"],
  company: ["All", "Google", "Meta", "Amazon", "Microsoft", "Apple", "Netflix"],
};

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All");

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = selectedExpertise === "All" || mentor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

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
              Our Mentors
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Learn from{" "}
              <span className="gradient-text">Industry Experts</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get 1:1 guidance from professionals at top companies who&apos;ve been in your shoes.
              Our mentors have helped hundreds of professionals land their dream jobs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, company, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.expertise.map((expertise) => (
                <Button
                  key={expertise}
                  variant={selectedExpertise === expertise ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedExpertise(expertise)}
                  className={selectedExpertise === expertise ? "gradient-bg text-white" : ""}
                >
                  {expertise}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-purple-500/30 bg-gradient-to-br from-purple-950/80 via-purple-900/50 to-purple-800/40 backdrop-blur-xl border-purple-400/20">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-muted-foreground text-sm">{mentor.role}</p>
                        <p className="text-primary font-medium text-sm">{mentor.company}</p>
                      </div>
                    </div>

                    {/* Rating & Experience */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-muted-foreground text-sm">({mentor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{mentor.experience}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{mentor.location}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {mentor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <Button variant="gradient" className="w-full">
                        Book a Session
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No mentors found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedExpertise("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
