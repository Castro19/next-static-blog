import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getMarkdownFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith(".md")) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export default function getPostMetadata(basePath) {
  // List directories in basePath
  const directories = fs.readdirSync(basePath).filter((file) => {
    return fs.statSync(path.join(basePath, file)).isDirectory();
  });

  // Initialize an empty array to hold paths to markdown files
  let markdownFiles = [];

  // Get markdown files from each subdirectory
  directories.forEach((dir) => {
    const dirPath = path.join(basePath, dir);
    markdownFiles = getMarkdownFiles(dirPath, markdownFiles);
  });

  // Process each markdown file to extract metadata
  const posts = markdownFiles.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    // Extract the slug from the file path, ensuring uniqueness and structure
    const slug = path.relative(basePath, filePath).replace(/\.md$/, "");

    return {
      title: matterResult.data.title,
      bio: matterResult.data.bio,
      priority1: matterResult.data.priority1,
      priority2: matterResult.data.priority2,
      priority3: matterResult.data.priority3,
      slug: slug,
    };
  });

  return posts;
}
