export type NewsItem = {
  slug: string;
  type: 'article' | 'video';
  title: string;
  category: 'club' | 'academy' | 'community' | 'investors' | 'player-journeys';
  club?: 'bangalore-ssfc' | 'pondicherry-ssfc' | 'chennai-ssfc' | 'bfs';
  thumbnail: string;
  videoUrl?: string; // empty for now
  duration?: string; // e.g. "12:45"
  excerpt?: string;
  author?: string;
  publishedAt: string;
  featured?: boolean;
};
