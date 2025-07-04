import { remark } from "remark";
import html from "remark-html";
import { marked } from "marked";

export default async function markdownToHtml(markdown: string) {
  return marked(markdown);
}
