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
}

export const articles: Article[] = [
  {
    id: "building-next-generation",
    title: "Building The Next Generation Of Indian Footballers",
    category: "Academy",
    description: "How our academies are using European development standards to nurture young talent and carve direct paths to professional leagues.",
    content: `
      <p class="lead">At SuperStriker International, we believe that world-class players aren't born; they are engineered through structured guidance, elite mentorship, and proper infrastructure. Our youth academies are building the future champions of Indian football.</p>
      
      <p>Over the last decade, India has seen a massive surge in football interest, yet a structured player pathway has often been the missing link. SuperStriker's academy system directly addresses this by introducing a curriculum inspired by European development standards, adapted to the local environment.</p>

      <blockquote>
        "Our target is clear: to establish a continuous pipeline of talent that is ready to compete at the absolute highest level. We want to see our academy graduates representing the national team."
        <cite>— Ramakrishnan, President & Head of Football Operations</cite>
      </blockquote>

      <img src="/images/training-1.jpg" alt="Scientific football coaching drills" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Modern Curriculum and Scientific Coaching</h3>
      <p>Our training centers utilize periodic development tracking, physical conditioning modules, and video analysis. Rather than focusing solely on match results, the emphasis is placed on technical proficiency, tactical awareness, and cognitive decision-making in high-pressure situations.</p>
      
      <img src="/images/match-1.jpg" alt="Academy players in a match" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <p>Through our network of clubs, including Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC, players have direct access to senior team exposure. Our coaching staff, comprised of AIFF licensed coaches, ensures every child receives individual focus.</p>

      <img src="/images/team-1.jpg" alt="SuperStrikers Academy Team Cohort" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Holistic Athlete Support</h3>
      <p>Beyond tactical and physical training, our academy programs provide support in nutrition, sports psychology, and career guidance. We prepare our young athletes for the mental demands of professional sports, ensuring they grow not just as players, but as confident, disciplined individuals.</p>
    `,
    image: "/images/training-1.jpg",
    author: {
      name: "SuperStriker Editorial Team",
      role: "Lead Sports Journalists",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop"
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
    content: `
      <p class="lead">Grassroots football is the heartbeat of the ecosystem. Without a wide base of young boys and girls playing the sport regularly, achieving elite national success remains a distant dream. SuperStriker is sparking a revolution in South India.</p>

      <p>Through our Grassroots Football program, we have partnered with dozens of government and private schools to introduce physical literacy through football. By organizing weekly training camps and monthly weekend festivals, we make football accessible, fun, and educational.</p>
      
      <blockquote>
        "Grassroots is about joy, movement, and initial love for the sport. When children enjoy having the ball at their feet, they learn naturally."
      </blockquote>

      <img src="/images/training-2.jpg" alt="Young children participating in grassroots training" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Identifying Talent Early</h3>
      <p>Our grassroots festivals are not just about fun; they are scouts' goldmines. Coaches observe players for natural coordination, spatial intelligence, and resilience. Promising talents identified at the grassroots level are offered full scholarships to our elite Bangalore Football School program.</p>

      <img src="/images/match-2.jpg" alt="Youth match action at grassroots festival" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Building Communities</h3>
      <p>By involving parents, teachers, and local volunteers, SuperStriker is building a community structure around football. We run community coaching clinics to train school physical education teachers in basic football development models, multiplying our impact across schools.</p>
    `,
    image: "/images/training-2.jpg",
    author: {
      name: "SuperStriker Editorial Team",
      role: "Grassroots Development Coordinator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
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
    content: `
      <p class="lead">The journey of a young Indian footballer is often filled with uncertainty. Where do they go after school? How do they get scouted? SuperStriker's system creates a clear, transparent pipeline.</p>

      <p>We are creating a robust ladder for players to climb. A child starts at our weekend grassroots clinic, moves to the Bangalore Football School, enters the youth competitive teams, and eventually graduates to our senior professional clubs competing in official leagues.</p>

      <img src="/images/match-1.jpg" alt="Competitive match pathway action" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>The Five Pillars of our Pathway</h3>
      <ol>
        <li><strong>Discovery:</strong> Grassroots clinics and open scouting festivals.</li>
        <li><strong>Foundation:</strong> Comprehensive coaching at Bangalore Football School, focusing on fundamental mechanics.</li>
        <li><strong>Competition:</strong> Joining youth squads of Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC to play in state leagues.</li>
        <li><strong>Exposure:</strong> Representing clubs in national tournaments and playing against international youth academies.</li>
        <li><strong>Professional Contracts:</strong> Transitioning to the first team and earning professional representation.</li>
      </ol>

      <blockquote>
        "Our system ensures that no talented player in South India falls through the cracks due to a lack of connection or opportunity."
        <cite>— President's Office</cite>
      </blockquote>

      <img src="/images/team-2.jpg" alt="Senior league squad lineup" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Strategic Network Impact</h3>
      <p>By owning multiple clubs in different states (Karnataka, Tamil Nadu, Pondicherry), we can offer regional talent localized training while offering a combined network for national scouting scouts and tournament organizers.</p>
    `,
    image: "/images/match-1.jpg",
    author: {
      name: "SuperStriker Editorial Team",
      role: "Strategic Development Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
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
    content: `
      <p class="lead">We are proud to announce a new corporate sponsorship deal that will significantly upgrade our training infrastructure, bringing state-of-the-art turf technology and high-tech performance trackers to all our teams.</p>

      <p>This partnership aligns with SuperStriker's vision of professionalizing infrastructure. The investment will fund the creation of two new FIFA-standard artificial turf pitches in Bangalore, complete with smart LED lighting for night training.</p>

      <blockquote>
        "Partnerships like these show that corporate India is ready to invest in football. High-quality infrastructure is the foundation of high-quality football."
        <cite>— Investor Relations Team</cite>
      </blockquote>

      <img src="/images/training-1.jpg" alt="High performance training turf" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Introducing Smart Telemetry</h3>
      <p>As part of this expansion, all senior team players and elite academy athletes will receive GPS-enabled vest trackers. This technology will gather real-time data on player speed, heat maps, deceleration, and cardiovascular loads, allowing coaches to optimize workouts and prevent injuries.</p>

      <h3>Community Access Hours</h3>
      <p>True to our community philosophy, the new turf facilities will host free grassroots clinics for local municipal school children twice a week, ensuring the investment benefits the wider society.</p>
    `,
    image: "/images/match-2.jpg",
    author: {
      name: "Investor Relations Team",
      role: "Corporate Finance",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
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
    content: `
      <p class="lead">Following the success of our Under-13 academy cohorts, Pondicherry Super Strikers FC is expanding its elite youth setup with the addition of a fully residential Under-15 category starting this season.</p>

      <p>Pondicherry has a rich history of sports passion, and by establishing a professional development squad in the U-15 bracket, we ensure talented players have local access to professional training without having to relocate to distant cities at too young an age.</p>

      <blockquote>
        "The U-15 years are critical for tactical development. This expansion will allow us to shape our players' game understanding to meet professional standards."
      </blockquote>

      <img src="/images/training-2.jpg" alt="U-15 training session" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Residential Integration</h3>
      <p>The selected players will reside in our partner housing facility, combining specialized football training with high-quality education at local schools. This model guarantees a balanced growth path, preparing students for life both on and off the pitch.</p>
    `,
    image: "/images/training-2.jpg",
    author: {
      name: "SuperStriker Editorial Team",
      role: "Academy Scout",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
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
    content: `
      <p class="lead">Chennai Super Strikers FC has officially registered and secured affiliation to compete in the regional senior division league for the upcoming season, marking a major milestone for our Tamil Nadu branch.</p>

      <p>This registration gives our Chennai squad a competitive regular league calendar. The team will play its home matches on the renovated local grounds, bringing professional team football back to the community's fans.</p>

      <blockquote>
        "Competing in a structured league is essential for player maturation. Our young squad is eager to test themselves against the best local talent."
      </blockquote>

      <img src="/images/team-1.jpg" alt="Chennai Super Strikers squad lineup" class="w-full rounded-xl my-8 object-cover shadow-sm aspect-[16/9]" />

      <h3>Squad Composition</h3>
      <p>The squad is a blend of experienced local league players and elite graduates from our South India academies, fulfilling our commitment to bridging academy training with professional competition.</p>
    `,
    image: "/images/team-1.jpg",
    author: {
      name: "SuperStriker Editorial Team",
      role: "Chennai Team Correspondent",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
    },
    publishedDate: "May 20, 2026",
    readTime: "4 min read",
    year: "2026",
    club: "Chennai Super Strikers"
  }
];
