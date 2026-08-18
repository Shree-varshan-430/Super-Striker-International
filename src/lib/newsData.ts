export interface Article {
  id: string;
  title: string;
  category: "Academy" | "Grassroots" | "Club Updates" | "Investor Updates" | "Community";
  description: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  year: string;
  club: "Bangalore Super Strikers" | "Pondicherry Super Strikers" | "Chennai Super Strikers" | "None";
  takeaways?: string[];
  quoteText?: string;
  quoteAuthor?: string;
}

export const articles: Article[] = [
  {
    id: "building-next-generation",
    title: "Building The Next Generation Of Indian Footballers",
    category: "Academy",
    description: "How our academies are using European development standards to nurture young talent and carve direct paths to professional leagues.",
    takeaways: [
      "AIFF-C Licensed coaching protocols across all age categories",
      "Scientific nutritional tracking and GPS physical load telemetry",
      "Direct senior league pathway into KSFA First Division rosters",
      "Comprehensive sports psychology and cognitive game awareness"
    ],
    quoteText: "Hard work beats talent when talent fails to work hard. On this pitch, opportunity belongs to those who give everything for their teammates.",
    quoteAuthor: "Ramakrishnan — BSSFC President & AIFF-C Licensed Coach",
    content: `
      <p class="lead">At SuperStriker International, we believe that world-class players aren't born by chance; they are engineered through structured guidance, elite mentorship, and proper infrastructure. Our youth academies are building the future champions of Indian football.</p>
      
      <p>Over the last decade, India has seen a massive surge in football passion, yet a structured, continuous player pathway has often been the missing link. SuperStriker's academy system directly addresses this gap by introducing an elite training curriculum inspired by European development standards, adapted specifically for the Indian sporting ecosystem.</p>

      <div class="my-8 rounded-2xl bg-gray-50 p-6 sm:p-8 border-l-4 border-[#11123c]">
        <h4 class="font-display text-base sm:text-lg font-black uppercase text-[#11123c] mb-2">Pillar 1: Technical & Tactical Precision</h4>
        <p class="text-sm sm:text-base text-[#4B5563] leading-relaxed">Our training centers utilize periodic developmental tracking, physical conditioning modules, and video telemetry loops. Rather than focusing solely on match victories, priority is placed on ball control under pressure, spatial intelligence, and rapid decision-making.</p>
      </div>

      <img src="/images/training-1.jpg" alt="Scientific football coaching drills on turf" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <blockquote class="my-10 border-l-4 border-[#e9d319] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "Opportunity is not something you wait for. You seize it every single dawn through relentless repetition, tactical discipline, and unconditional passion for the game."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— Technical Director, Youth Academy</cite>
      </blockquote>

      <h3>Direct Senior League Exposure</h3>
      <p>Through our interconnected network of professional clubs—Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC—graduating academy players have guaranteed trial access to senior team rosters. Our licensed coaching staff ensures every student athlete receives personalized technical mentoring.</p>

      <img src="/images/founder-pitch-standing.jpg" alt="President inspecting high-performance pitch drills" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9] object-top" />

      <h3>Holistic Athletic Mentorship</h3>
      <p>Beyond tactical drills on the turf, our programs provide structured guidance in sports nutrition, mental resilience, and academic balance. We prepare young athletes for the high-pressure demands of modern professional leagues, creating disciplined leaders on and off the field.</p>
    `,
    image: "/images/news-player-development.jpg",
    author: {
      name: "SuperStriker Media Desk",
      role: "Lead Academy Correspondent",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "August 04, 2026",
    readTime: "4 min read",
    year: "2026",
    club: "Bangalore Super Strikers"
  },
  {
    id: "grassroots-revolution",
    title: "Grassroots Football Revolution In South India",
    category: "Grassroots",
    description: "An inside look at our grassroots festivals and clinics bringing football education to thousands of school children in Karnataka and Tamil Nadu.",
    takeaways: [
      "Over 2,500+ school students introduced to physical literacy",
      "Free football kit distribution across municipal school districts",
      "Weekend grassroots youth league with zero participation fees",
      "100% full scholarships awarded to standout scouted players"
    ],
    quoteText: "Every child holding a football deserves the opportunity to dream. When we remove financial barriers, true champions emerge.",
    quoteAuthor: "Grassroots Foundation Director",
    content: `
      <p class="lead">Grassroots football is the heartbeat of our entire ecosystem. Without a wide, enthusiastic base of young boys and girls playing regularly, elite national success remains impossible. SuperStriker is sparking a revolution across South India.</p>

      <p>Through our Grassroots Foundation program, we have partnered with dozens of government and private schools to integrate physical literacy and basic football techniques directly into physical education schedules. By organizing weekly training camps and monthly weekend tournaments, we make sports accessible, healthy, and empowering.</p>
      
      <img src="/images/news-underpriv-camp.jpg" alt="Young children participating in grassroots training clinic" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <blockquote class="my-10 border-l-4 border-[#11123c] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "Playing football is about joy, movement, and building character. When children experience the thrill of scoring a goal and working as a unit, they learn lifelong lessons in perseverance and respect."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— BSSFC Community Foundation</cite>
      </blockquote>

      <h3>Early Talent Identification</h3>
      <p>Our grassroots festivals serve as vital talent scouting hubs. Senior coaches observe participants for natural coordination, acceleration, spatial awareness, and competitive grit. Promising athletes discovered at these grassroots clinics receive full scholarships to our flagship Bangalore Football School program.</p>

      <img src="/images/founder-with-football.jpg" alt="Foundation clinic on turf training ground" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <h3>Empowering Local Communities & Coaches</h3>
      <p>By actively involving parents, teachers, and volunteer physical instructors, SuperStriker builds a lasting community infrastructure around sports. We conduct free certification workshops for local school coaches, multiplying our developmental impact across dozens of regional clusters.</p>
    `,
    image: "/images/news-grassroots.jpg",
    author: {
      name: "SuperStriker Media Desk",
      role: "Grassroots Outreach Coordinator",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "November 18, 2025",
    readTime: "3 min read",
    year: "2025",
    club: "None"
  },
  {
    id: "creating-football-pathways",
    title: "How SuperStriker International Is Creating Football Pathways",
    category: "Club Updates",
    description: "From school leagues to senior teams, our comprehensive pathway model bridges the gap between recreational play and professional contracts.",
    takeaways: [
      "Structured 5-tier vertical progression from U-7 to Senior League",
      "Direct affiliation with State Associations (KSFA, TFA, PFA)",
      "Periodic scouting showcases before national league selectors",
      "Contractual legal guidance and player rights protection"
    ],
    quoteText: "No athlete should fall through the cracks because of background or lack of connections. We build the bridge from local fields to the national arena.",
    quoteAuthor: "Strategic Development Director",
    content: `
      <p class="lead">The sporting journey of an aspiring young footballer in India has historically been filled with uncertainty. Where do they go after school? How do they get scouted? SuperStriker's system establishes a clear, transparent pipeline.</p>

      <p>We have engineered a robust developmental ladder. A child starts at our weekend grassroots clinic, advances into the Bangalore Football School, earns placement in youth competitive teams, and eventually graduates into our senior professional clubs competing in official state division leagues.</p>

      <img src="/images/news-scouting.jpg" alt="Competitive match pathway scouting action" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <h3>The Five Pillars of Our Developmental Pathway</h3>
      <div class="space-y-3 my-6">
        <div class="bg-gray-50 rounded-xl p-4 border-l-4 border-[#11123c]">
          <strong class="text-[#11123c] uppercase text-sm">1. Discovery:</strong>
          <span class="text-sm text-[#4B5563] ml-1">Open grassroots festivals and school trial clinics across Karnataka and Tamil Nadu.</span>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 border-l-4 border-[#11123c]">
          <strong class="text-[#11123c] uppercase text-sm">2. Foundation:</strong>
          <span class="text-sm text-[#4B5563] ml-1">Comprehensive coaching at Bangalore Football School, mastering ball control and agility.</span>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 border-l-4 border-[#11123c]">
          <strong class="text-[#11123c] uppercase text-sm">3. Competition:</strong>
          <span class="text-sm text-[#4B5563] ml-1">Joining youth competitive squads in KSFA, TFA, and PFA sanctioned tournaments.</span>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 border-l-4 border-[#11123c]">
          <strong class="text-[#11123c] uppercase text-sm">4. Exposure:</strong>
          <span class="text-sm text-[#4B5563] ml-1">National tournament showcases and fixtures against international youth academies.</span>
        </div>
        <div class="bg-gray-50 rounded-xl p-4 border-l-4 border-[#11123c]">
          <strong class="text-[#11123c] uppercase text-sm">5. Professional Contracts:</strong>
          <span class="text-sm text-[#4B5563] ml-1">First-team promotion and professional sports representation.</span>
        </div>
      </div>

      <blockquote class="my-10 border-l-4 border-[#e9d319] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "The distance between a dream and reality is called hard work and discipline. When a player commits to the process, our pathway delivers the platform."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— Head of Player Development</cite>
      </blockquote>

      <img src="/images/founder-portrait-fence.jpg" alt="Foundation field scouting overview" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <h3>Multi-State Operational Advantage</h3>
      <p>By owning competitive football clubs across multiple regions (Karnataka, Tamil Nadu, Pondicherry), SuperStriker provides localized training hubs while offering a unified scouting network that attracts national scouts, agents, and league managers.</p>
    `,
    image: "/images/news-pathways.jpg",
    author: {
      name: "SuperStriker Media Desk",
      role: "Strategic Development Director",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "July 15, 2026",
    readTime: "5 min read",
    year: "2026",
    club: "Bangalore Super Strikers"
  },
  {
    id: "turf-sponsorship-deal",
    title: "Bangalore Super Strikers FC Secure Turf Sponsorship",
    category: "Investor Updates",
    description: "A landmark partnership that guarantees upgraded facilities, new training pitches, and advanced sports-tech telemetry for senior and youth squads.",
    takeaways: [
      "Two brand-new FIFA-grade artificial turf pitches in Bengaluru",
      "GPS performance tracking vests for senior and academy athletes",
      "Night training smart LED lighting systems installed",
      "Free community access hours dedicated to municipal school students"
    ],
    quoteText: "Modern sports infrastructure is the catalyst that turns raw enthusiasm into international competitive caliber.",
    quoteAuthor: "Investor Relations & Infrastructure Director",
    content: `
      <p class="lead">We are proud to announce a landmark corporate sponsorship agreement that will significantly upgrade our training infrastructure, bringing state-of-the-art turf technology and high-precision performance trackers to all our squads.</p>

      <p>This capital partnership aligns directly with SuperStriker's mission to professionalize Indian sports infrastructure. The investment funds the development of two new FIFA-standard artificial turf training hubs in Bangalore, complete with floodlit smart LED illumination for evening training sessions.</p>

      <img src="/images/training-2.jpg" alt="High performance turf pitch facility" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <blockquote class="my-10 border-l-4 border-[#e9d319] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "Investing in football infrastructure is investing in human potential. When players have world-class pitches, they train harder, recover faster, and dream bigger."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— Investor Relations Executive Board</cite>
      </blockquote>

      <h3>Introducing Smart GPS Telemetry</h3>
      <p>As part of this expansion, all senior first-team players and senior academy athletes will receive wearable GPS telemetry vests. This technology monitors acceleration, top sprint velocity, tactical heat maps, and cardiovascular exertion in real time, allowing coaching staff to optimize workloads and minimize injury risks.</p>

      <img src="/images/founder-turf-pose.jpg" alt="Founder inspecting professional turf infrastructure" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <h3>Community Access & Public Health</h3>
      <p>True to our core philosophy, the newly constructed turf complexes will host free football clinics for municipal school children twice a week, ensuring that modern sports infrastructure directly enriches the wider public community.</p>
    `,
    image: "/images/news-pitch-sponsorship.jpg",
    author: {
      name: "Investor Relations Team",
      role: "Corporate Finance & Partnerships",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "June 30, 2026",
    readTime: "3 min read",
    year: "2026",
    club: "Bangalore Super Strikers"
  },
  {
    id: "pondicherry-academy-expands",
    title: "Pondicherry Academy Expands to Under-15 Category",
    category: "Academy",
    description: "Responding to growing demand, Pondicherry Super Strikers FC launches its new residential U-15 cohort to develop regional talent.",
    takeaways: [
      "Full residential boarding integrated with accredited schooling",
      "Dedicated goalkeeper and position-specific tactical coaching",
      "Inter-state match tours against top South Indian youth clubs",
      "Comprehensive nutritional and medical support included"
    ],
    quoteText: "The Under-15 transition is where boys become footballers. Intensive tactical training shapes their game understanding for the professional arena.",
    quoteAuthor: "Pondicherry Youth Academy Head Coach",
    content: `
      <p class="lead">Following the outstanding success of our Under-13 academy cohorts, Pondicherry Super Strikers FC is expanding its elite youth setup with the launch of a fully residential Under-15 development category starting this competitive season.</p>

      <p>Pondicherry has an extraordinary athletic heritage. By establishing a dedicated residential academy for the U-15 bracket, we ensure talented regional athletes have access to licensed coaching, specialized strength mentoring, and proper nutrition without needing to migrate to distant metropolitan hubs at an early age.</p>

      <img src="/images/news-pondicherry-scout.jpg" alt="U-15 training session in progress" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <blockquote class="my-10 border-l-4 border-[#11123c] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "Champions are forged in the quiet hours of practice when no one is watching. In our residential academy, hard work is our daily standard."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— Technical Staff, Pondicherry FC</cite>
      </blockquote>

      <h3>Integrated Academic & Athletic Routine</h3>
      <p>Selected players reside in our dedicated boarding facility, balancing intensive morning and evening pitch sessions with accredited academic education at partner schools. This model ensures complete personal development, equipping players with leadership skills both on and off the field.</p>

      <img src="/images/news-coaches-talk.jpg" alt="Coaches briefing youth cohort" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />
    `,
    image: "/images/news-academy-u15.jpg",
    author: {
      name: "SuperStriker Media Desk",
      role: "Pondicherry Regional Correspondent",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "October 12, 2025",
    readTime: "3 min read",
    year: "2025",
    club: "Pondicherry Super Strikers"
  },
  {
    id: "chennai-super-strikers-ksfa",
    title: "Chennai Super Strikers Join Local Division League",
    category: "Club Updates",
    description: "Chennai Super Strikers FC officially registers for the upcoming state league division, giving senior players a competitive platform.",
    takeaways: [
      "Official senior registry with state football association",
      "Squad comprised of top academy graduates and experienced seniors",
      "Home fixtures hosted at renovated community stadium",
      "Live match streaming and player telemetry coverage"
    ],
    quoteText: "Competing in a senior league is the ultimate test. It transforms raw academy potential into seasoned match maturity.",
    quoteAuthor: "Chennai Super Strikers Head Coach",
    content: `
      <p class="lead">Chennai Super Strikers FC has officially registered and secured affiliation to compete in the regional senior division league for the upcoming season, marking a major milestone for our Tamil Nadu branch.</p>

      <p>This registration gives our Chennai squad a competitive regular league calendar. The team will play its home matches on renovated local grounds, bringing high-energy professional football directly to the community's passionate supporters.</p>

      <img src="/images/match-1.jpg" alt="Chennai Super Strikers match action on turf" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />

      <blockquote class="my-10 border-l-4 border-[#e9d319] bg-[#11123c] text-white p-6 sm:p-8 rounded-2xl">
        <p class="text-base sm:text-xl font-bold uppercase tracking-tight text-[#e9d319] leading-relaxed">
          "On matchday, passion meets preparation. Every ball contested, every tackle made, and every goal scored is a testament to the sweat poured into training."
        </p>
        <cite class="block text-xs uppercase tracking-widest text-white/70 font-semibold mt-3">— Senior Team Captain, Chennai Super Strikers</cite>
      </blockquote>

      <h3>Balanced Squad Composition</h3>
      <p>The squad is a strategic blend of seasoned state league veterans and outstanding graduates from our South India youth academies, fulfilling our long-term commitment to bridging grassroots football with senior professional league success.</p>

      <img src="/images/news-goalkeeping.jpg" alt="Goalkeeping tactical drills" class="w-full rounded-2xl my-8 object-cover shadow-lg aspect-[16/9]" />
    `,
    image: "/images/news-chennai-league.jpg",
    author: {
      name: "SuperStriker Media Desk",
      role: "Chennai Team Correspondent",
      avatar: "/images/founder-portrait.jpg"
    },
    publishedDate: "May 20, 2026",
    readTime: "4 min read",
    year: "2026",
    club: "Chennai Super Strikers"
  }
];
