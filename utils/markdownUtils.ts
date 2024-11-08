import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { AgentMetadata, BlogMetadata } from "@/types";

interface getMarkdownMetadataProps {
  fullDirectory: string;
  fileName: string;
}

type MetadataType = "agent" | "blog";

export function getMarkdownMetadata<T extends MetadataType>(
  { fullDirectory, fileName }: getMarkdownMetadataProps,
  type: T
): T extends "agent" ? AgentMetadata : BlogMetadata {
  // Remove ".mdx" from file name to get slug
  const slug = fileName.replace(/\.mdx$/, "");

  // Read markdown file as string
  const fullPath = path.join(fullDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const metadata = matter(fileContents).data;

  const result = {
    slug,
    ...metadata
  };

  // Type assertion based on the type parameter
  return result as T extends "agent" ? AgentMetadata : BlogMetadata;
}

export function getSortedDirectoryData<T extends MetadataType>(
  directory: string,
  type: T
): Array<T extends "agent" ? AgentMetadata : BlogMetadata> {
  const sortKey = type === "blog" ? "publishedAt" : "includeOnHomePage";
  // Get all the files under the directory
  const fullDirectory = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(fullDirectory);

  const allPostsData = fileNames.map((fileName) => 
    getMarkdownMetadata({ fullDirectory, fileName }, type)
  );

  // Sort by the sortKey
  const sortedData = allPostsData.sort((a, b) => {
    const aValue = a[sortKey as keyof typeof a];
    const bValue = b[sortKey as keyof typeof b];

    if (aValue === bValue) {
      return 0;
    } else if (aValue < bValue) {
      return 1;
    } else {
      return -1;
    }
  });

  // Type assertion based on the type parameter
  return sortedData as Array<T extends "agent" ? AgentMetadata : BlogMetadata>;
}
