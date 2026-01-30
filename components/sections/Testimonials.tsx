"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "thebreakin completely transformed my job search. Within 3 months, I went from endless rejections to multiple offers from top tech companies. The resume optimization and interview prep were game-changers!",
    rating: 5,
    stats: "150+ Applications → 12 Interviews → 3 Offers",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Data Scientist",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "As an international student on OPT, I was worried about finding H1B sponsors. thebreakin's team not only found me opportunities but also coached me through the entire visa process. Now I'm living my dream at Amazon!",
    rating: 5,
    stats: "OPT → H1B Sponsorship in 4 months",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Product Manager",
    company: "Meta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "The mentorship program connected me with a PM at a FAANG company who helped me understand exactly what interviewers look for. The personalized guidance made all the difference in my career transition.",
    rating: 5,
    stats: "Career Switch → PM Role in 6 months",
  },
  {
    id: 4,
    name: "Wei Chen",
    role: "Senior Developer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "I was skeptical at first, but the results speak for themselves. The team applied to roles I wouldn't have found on my own, and their follow-up with recruiters got me interviews at companies that had initially passed on my application.",
    rating: 5,
    stats: "200+ Targeted Applications → Senior Role Secured",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real Results from{" "}
            <span className="gradient-text">Real People</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of professionals who have successfully landed their
            dream jobs in the US with our help.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Stats Badge */}
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
                {testimonials[currentIndex].stats}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at{" "}
                    <span className="text-primary font-medium">{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
