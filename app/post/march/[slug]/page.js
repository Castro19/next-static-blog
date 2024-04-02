import React from "react";
import MarkdownIt from "markdown-it";
import fs from "fs";
import matter from "gray-matter";

const md = new MarkdownIt();

function getPostContent(slug) {
  try {
    const folder = "posts/march/";
    const filePath = `${folder}${slug}.md`;
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      // Handle the missing file case, e.g., return null or a placeholder content
      return { content: "This post could not be found.", data: {} };
    }
    const content = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return { content: "An error occurred.", data: {} };
  }
}

export default function BlogPage(props) {
  const { slug } = props.params;
  const post = getPostContent(slug);
  const messageHtml = md.render(post.content);
  console.log(messageHtml);
  return (
    <main>
      <div className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: messageHtml }} />
      </div>
    </main>
  );
}
