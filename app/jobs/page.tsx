"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Globe,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CTA from "@/components/sections/CTA";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$180k - $250k",
    posted: "2 days ago",
    visaSponsorship: true,
    experience: "Senior",
    description: "Join Google's Cloud team to build scalable distributed systems. You'll work on cutting-edge technology that serves billions of users worldwide.",
    requirements: [
      "5+ years of software engineering experience",
      "Strong proficiency in Python, Java, or Go",
      "Experience with distributed systems",
      "BS/MS in Computer Science or equivalent",
    ],
    benefits: ["Comprehensive health coverage", "401k matching", "Unlimited PTO", "Visa sponsorship"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$170k - $230k",
    posted: "1 day ago",
    visaSponsorship: true,
    experience: "Mid-Senior",
    description: "Drive product strategy for Meta's AR/VR platforms. Lead cross-functional teams to deliver innovative experiences.",
    requirements: [
      "4+ years of product management experience",
      "Experience with consumer products",
      "Strong analytical skills",
      "MBA preferred but not required",
    ],
    benefits: ["Health & wellness", "Parental leave", "Learning stipend", "Visa sponsorship"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$150k - $200k",
    posted: "3 days ago",
    visaSponsorship: true,
    experience: "Mid",
    description: "Apply machine learning to solve complex business problems at scale. Work with petabytes of data to drive key decisions.",
    requirements: [
      "3+ years of data science experience",
      "Proficiency in Python and SQL",
      "Experience with ML frameworks",
      "MS/PhD in quantitative field",
    ],
    benefits: ["Stock options", "Relocation package", "Career development", "Visa sponsorship"],
  },
  {
    id: 4,
    title: "Frontend Engineer",
    company: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160k - $220k",
    posted: "5 days ago",
    visaSponsorship: true,
    experience: "Mid-Senior",
    description: "Build the future of online payments. Create beautiful, performant interfaces used by millions of businesses.",
    requirements: [
      "4+ years of frontend experience",
      "Expert in React and TypeScript",
      "Experience with design systems",
      "Strong attention to detail",
    ],
    benefits: ["Remote-friendly", "Equity", "Health benefits", "Visa sponsorship"],
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "OpenAI",
    logo: "https://logo.clearbit.com/openai.com",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$200k - $350k",
    posted: "1 week ago",
    visaSponsorship: true,
    experience: "Senior",
    description: "Work on cutting-edge AI research and development. Help build safe and beneficial artificial general intelligence.",
    requirements: [
      "5+ years of ML engineering experience",
      "Publications in top ML conferences",
      "Experience with large-scale training",
      "PhD preferred",
    ],
    benefits: ["Competitive equity", "Research freedom", "Top-tier benefits", "Visa sponsorship"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    location: "Redmond, WA",
    type: "Full-time",
    salary: "$140k - $190k",
    posted: "4 days ago",
    visaSponsorship: true,
    experience: "Mid",
    description: "Build and maintain Azure cloud infrastructure. Enable teams to deploy and scale their applications efficiently.",
    requirements: [
      "3+ years of DevOps experience",
      "Experience with Kubernetes and Docker",
      "Knowledge of CI/CD pipelines",
      "Cloud certifications a plus",
    ],
    benefits: ["Work-life balance", "Learning opportunities", "Stock grants", "Visa sponsorship"],
  },
];

const experienceLevels = ["All", "Entry", "Mid", "Mid-Senior", "Senior"];

function JobsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize state from URL params
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedExperience, setSelectedExperience] = useState(
    searchParams.get("experience") || "All"
  );
  const [showVisaOnly, setShowVisaOnly] = useState(
    searchParams.get("visa") === "true"
  );

  // Sync URL params to state when they change (e.g., from hero search)
  useEffect(() => {
    const q = searchParams.get("q");
    const experience = searchParams.get("experience");
    const visa = searchParams.get("visa");

    if (q !== null) setSearchQuery(q);
    if (experience !== null) setSelectedExperience(experience);
    if (visa !== null) setShowVisaOnly(visa === "true");
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = (newQuery: string, newExperience: string, newVisa: boolean) => {
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (newExperience !== "All") params.set("experience", newExperience);
    if (newVisa) params.set("visa", "true");

    const queryString = params.toString();
    router.replace(`/jobs${queryString ? `?${queryString}` : ""}`, { scroll: false });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateURL(value, selectedExperience, showVisaOnly);
  };

  const handleExperienceChange = (value: string) => {
    setSelectedExperience(value);
    updateURL(searchQuery, value, showVisaOnly);
  };

  const handleVisaToggle = () => {
    const newValue = !showVisaOnly;
    setShowVisaOnly(newValue);
    updateURL(searchQuery, selectedExperience, newValue);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedExperience("All");
    setShowVisaOnly(false);
    router.replace("/jobs", { scroll: false });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExperience = selectedExperience === "All" || job.experience === selectedExperience;
    const matchesVisa = !showVisaOnly || job.visaSponsorship;
    return matchesSearch && matchesExperience && matchesVisa;
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
              Job Board
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Find Your{" "}
              <span className="gradient-text">Dream Job</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse curated opportunities from top companies that sponsor visas.
              All positions are verified and actively hiring.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {jobs.length}+ Active Jobs
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Visa Sponsorship Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by title, company, or location..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-12 h-12"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Experience:</span>
                {experienceLevels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedExperience === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleExperienceChange(level)}
                    className={selectedExperience === level ? "gradient-bg text-white" : ""}
                  >
                    {level}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button
                  variant={showVisaOnly ? "default" : "outline"}
                  size="sm"
                  onClick={handleVisaToggle}
                  className={showVisaOnly ? "gradient-bg text-white" : ""}
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Visa Sponsorship
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Company Logo */}
                          <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-10 h-10 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "";
                                (e.target as HTMLImageElement).style.display = "none";
                              }}
                            />
                          </div>

                          {/* Job Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                                  {job.title}
                                </h3>
                                <p className="text-muted-foreground">{job.company}</p>
                              </div>
                              {job.visaSponsorship && (
                                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 flex-shrink-0">
                                  <Globe className="w-3 h-3 mr-1" />
                                  Visa Sponsor
                                </Badge>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.posted}
                              </span>
                            </div>
                          </div>

                          {/* Apply Button */}
                          <div className="flex-shrink-0">
                            <Button variant="gradient">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                          <DialogDescription className="text-base">
                            {job.company} • {job.location}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Quick Info */}
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="secondary">{job.experience}</Badge>
                        <Badge variant="secondary">{job.salary}</Badge>
                        {job.visaSponsorship && (
                          <Badge className="bg-green-500/10 text-green-600">
                            <Globe className="w-3 h-3 mr-1" />
                            Visa Sponsorship
                          </Badge>
                        )}
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-semibold mb-2">About the Role</h4>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit) => (
                            <Badge key={benefit} variant="outline">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4 pt-4 border-t">
                        <Link href="/contact" className="flex-1">
                          <Button variant="gradient" className="w-full">
                            Apply with thebreakin
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No jobs found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={clearFilters}
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

function JobsLoadingSkeleton() {
  return (
    <div className="pt-20">
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-4 bg-muted rounded w-24 mx-auto mb-4 animate-pulse" />
            <div className="h-12 bg-muted rounded w-2/3 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-muted rounded w-1/2 mx-auto animate-pulse" />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={<JobsLoadingSkeleton />}>
      <JobsContent />
    </Suspense>
  );
}
