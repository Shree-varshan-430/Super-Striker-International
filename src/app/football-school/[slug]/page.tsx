import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, GraduationCap } from "lucide-react";

interface SchoolDetails {
  name: string;
  location: string;
  image: string;
  curriculum: string;
  focus: string;
  description: string;
  highlights: string[];
  ageGroups: { title: string; desc: string }[];
}

const schoolsData: Record<string, SchoolDetails> = {
  "bangalore-football-school": {
    name: "Bangalore Football School",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1200&auto=format&fit=crop",
    curriculum: "AIFF-Youth Development Framework",
    focus: "Developing raw athletic potential, physical literacy, tactical basics, and technical coordination.",
    description: "Bangalore Football School is the premier educational academy within the SuperStriker International network. We focus on training complete athletes, teaching technical competencies, tactical positioning, and core athletic values like teamwork, sportsmanship, and discipline from a very young age.",
    highlights: [
      "AIFF-C & B licensed coaching personnel",
      "Age-specific curriculum models (beginner to advanced modules)",
      "Smart telemetry vests and cardiovascular load monitoring",
      "Direct pathway registry to our state division clubs",
      "Regular district tournament fixtures and academy cups"
    ],
    ageGroups: [
      { title: "Grassroots (Ages 5–9)", desc: "Focuses on ball comfort, coordination games, physical literacy, and having fun." },
      { title: "Foundation (Ages 10–13)", desc: "Focuses on technical skills, small-sided games, passing structures, and basic positioning." },
      { title: "Youth Development (Ages 14–16)", desc: "Focuses on high-performance conditioning, advanced game tactics, state league preparation, and telemetry analysis." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "bangalore-football-school" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SchoolPage({ params }: PageProps) {
  const { slug } = await params;
  const school = schoolsData[slug];

  if (!school) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-secondary-navy min-h-screen">
      {/* Upper breadcrumb */}
      <div className="border-b border-gray-100 py-4 bg-background-soft px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:text-primary-sky transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
        {/* Title and Location */}
        <div className="flex flex-col gap-4 text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-1.5 self-center sm:self-start bg-primary-sky/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary-navy">
            <GraduationCap className="h-3.5 w-3.5 text-secondary-navy" />
            {school.location}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none">
            {school.name}
          </h1>
        </div>

        {/* Hero image */}
        <div className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-sm mb-12">
          <Image
            src={school.image}
            alt={`${school.name} training clinic`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Quick Metrics */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-background-soft border border-gray-150 p-6 rounded-xl flex flex-col gap-4">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-secondary-navy/50 border-b border-gray-200 pb-2">
                Academy Profile
              </h3>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">Curriculum Scheme</span>
                <span className="text-sm font-bold text-secondary-navy">{school.curriculum}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">Coaching Staff</span>
                <span className="text-sm font-bold text-secondary-navy">AIFF-C Licensed</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">Affiliation</span>
                <span className="text-sm font-bold text-secondary-navy">KSFA District Registry</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-navy/50">
                Talent Pipeline integration
              </h4>
              <p className="text-xs text-secondary-navy/60 leading-relaxed">
                Elite academy graduates are directly rostered into youth league squads representing Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC.
              </p>
            </div>
          </div>

          {/* Description and Age categories */}
          <div className="md:col-span-8 flex flex-col gap-8">
            {/* Context */}
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-secondary-navy">
                About our Football School
              </h2>
              <p className="text-sm sm:text-base text-secondary-navy/80 leading-relaxed">
                {school.description}
              </p>
              <p className="text-xs sm:text-sm text-secondary-navy/60 leading-relaxed mt-2">
                <strong>Training Focus:</strong> {school.focus}
              </p>
            </div>

            {/* Core checklist highlights */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-secondary-navy mb-4">
                Operations & Coaching Standards
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {school.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-secondary-navy/80 leading-relaxed">
                    <span className="h-5 w-5 rounded-full bg-primary-sky/20 text-secondary-navy flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Cohorts breakdown */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-secondary-navy mb-4">
                Age Brackets & Cohorts
              </h3>
              <div className="flex flex-col gap-4">
                {school.ageGroups.map((g, idx) => (
                  <div key={idx} className="bg-background-soft border border-gray-150/60 p-5 rounded-xl flex flex-col gap-1">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-secondary-navy">
                      {g.title}
                    </h4>
                    <p className="text-xs text-secondary-navy/60 leading-relaxed mt-1">
                      {g.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/investors#enquire"
                className="inline-flex items-center justify-center rounded-full bg-secondary-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary-navy/90"
              >
                Inquire About Sponsorships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
