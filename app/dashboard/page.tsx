"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Clock,
  TrendingUp,
  Plus,
  ChevronRight,
  Building2,
  MapPin,
  DollarSign,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Star,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Applications",
    value: "24",
    change: "+3 this week",
    trend: "up",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Active Interviews",
    value: "5",
    change: "2 scheduled",
    trend: "up",
    icon: Calendar,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Response Rate",
    value: "42%",
    change: "+8% vs avg",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Avg Response Time",
    value: "4.2 days",
    change: "Getting faster",
    trend: "up",
    icon: Clock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const applications = [
  {
    id: 1,
    company: "Google",
    position: "Senior Software Engineer",
    location: "Remote",
    salary: "$180k - $250k",
    status: "interview",
    appliedDate: "2024-01-15",
    nextStep: "Technical Interview - Jan 25",
    logo: "G",
  },
  {
    id: 2,
    company: "Meta",
    position: "Full Stack Developer",
    location: "Remote",
    salary: "$170k - $230k",
    status: "applied",
    appliedDate: "2024-01-18",
    nextStep: "Waiting for response",
    logo: "M",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Software Development Engineer",
    location: "Remote",
    salary: "$160k - $220k",
    status: "screening",
    appliedDate: "2024-01-12",
    nextStep: "Phone Screen - Jan 22",
    logo: "A",
  },
  {
    id: 4,
    company: "Microsoft",
    position: "Cloud Solutions Architect",
    location: "Remote",
    salary: "$175k - $240k",
    status: "offer",
    appliedDate: "2024-01-05",
    nextStep: "Offer received!",
    logo: "M",
  },
  {
    id: 5,
    company: "Netflix",
    position: "Backend Engineer",
    location: "Remote",
    salary: "$190k - $280k",
    status: "rejected",
    appliedDate: "2024-01-08",
    nextStep: "Position filled",
    logo: "N",
  },
];

const interviews = [
  {
    id: 1,
    company: "Google",
    type: "Technical Interview",
    date: "Jan 25, 2024",
    time: "10:00 AM PST",
    format: "Video Call",
  },
  {
    id: 2,
    company: "Amazon",
    type: "Phone Screening",
    date: "Jan 22, 2024",
    time: "2:00 PM PST",
    format: "Phone",
  },
];

const recommendations = [
  {
    id: 1,
    company: "Apple",
    position: "iOS Developer",
    match: 95,
    reason: "Skills match & career growth",
  },
  {
    id: 2,
    company: "Stripe",
    position: "Backend Engineer",
    match: 92,
    reason: "Experience alignment",
  },
  {
    id: 3,
    company: "Airbnb",
    position: "Full Stack Engineer",
    match: 88,
    reason: "Culture fit & growth",
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  applied: { label: "Applied", color: "bg-blue-500/10 text-blue-500", icon: Briefcase },
  screening: { label: "Screening", color: "bg-yellow-500/10 text-yellow-500", icon: MessageSquare },
  interview: { label: "Interview", color: "bg-purple-500/10 text-purple-500", icon: Calendar },
  offer: { label: "Offer", color: "bg-green-500/10 text-green-500", icon: CheckCircle2 },
  rejected: { label: "Rejected", color: "bg-red-500/10 text-red-500", icon: XCircle },
};

type TabType = "applications" | "interviews" | "recommendations";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>("applications");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = applications.filter(
    (app) => statusFilter === "all" || app.status === statusFilter
  );

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Job Dashboard</h1>
            <p className="text-muted-foreground">
              Track your applications and upcoming interviews
            </p>
          </div>
          <Button variant="gradient">
            <Plus className="w-4 h-4" />
            Add Application
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg w-fit">
            {[
              { id: "applications" as TabType, label: "Applications", count: applications.length },
              { id: "interviews" as TabType, label: "Interviews", count: interviews.length },
              { id: "recommendations" as TabType, label: "For You", count: recommendations.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? "bg-primary/10 text-primary" : "bg-muted-foreground/20"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {activeTab === "applications" && (
            <div>
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
                {["all", "applied", "screening", "interview", "offer", "rejected"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      statusFilter === status
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {status === "all" ? "All" : statusConfig[status]?.label || status}
                  </button>
                ))}
              </div>

              {/* Applications List */}
              <div className="space-y-3">
                {filteredApplications.map((app) => {
                  const config = statusConfig[app.status];
                  const StatusIcon = config.icon;
                  return (
                    <Card
                      key={app.id}
                      className="border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {app.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold truncate">{app.position}</h3>
                              <Badge className={`${config.color} border-0`}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {config.label}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                {app.company}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {app.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {app.salary}
                              </span>
                            </div>
                          </div>
                          <div className="hidden sm:block text-right">
                            <p className="text-sm font-medium">{app.nextStep}</p>
                            <p className="text-xs text-muted-foreground">
                              Applied {app.appliedDate}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "interviews" && (
            <div className="space-y-4">
              {interviews.length === 0 ? (
                <Card className="border-border/50">
                  <CardContent className="p-8 text-center">
                    <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-semibold mb-2">No upcoming interviews</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep applying! Interviews will appear here when scheduled.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                interviews.map((interview) => (
                  <Card key={interview.id} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{interview.type}</h3>
                          <p className="text-sm text-muted-foreground">{interview.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{interview.date}</p>
                          <p className="text-sm text-muted-foreground">
                            {interview.time} • {interview.format}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}

          {activeTab === "recommendations" && (
            <div className="space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    AI-Powered Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Based on your profile, skills, and application history, we&apos;ve found these
                    opportunities that match your preferences.
                  </p>
                </CardContent>
              </Card>

              {recommendations.map((rec) => (
                <Card
                  key={rec.id}
                  className="border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {rec.company[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{rec.position}</h3>
                        <p className="text-sm text-muted-foreground">{rec.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">{rec.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                          {rec.match}% Match
                        </div>
                      </div>
                      <Button variant="gradient" size="sm">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
