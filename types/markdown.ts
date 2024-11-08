import { authors, categories } from "@/content/blog"

export interface AgentMetadata {
  title: string;
  slug: string;
  description: string;
  icon: string;
  imagePath: string;
  imageAlt: string;
  includeOnHomePage: boolean;
}

export interface BlogMetadata {
  title: string;
  slug: string;
  description: string;
  categorySlugs: Array<keyof typeof categories>;
  authorSlug: keyof typeof authors;
  publishedAt: string;
  imagePath: string;
  imageAlt: string;
}
