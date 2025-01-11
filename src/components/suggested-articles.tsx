import { Post } from "@/app/types";
import { Row } from "@/ui/components";
import ArticleList from "./articles";
import { getAllPosts } from "@/server/api";

export function SuggestedArticlesList({
  currentarticle,
}: {
  currentarticle?: Post;
}) {
  const articles = getAllPosts();
  const otherarticles = articles.filter(
    (article) => article.slug !== currentarticle?.slug
  );

  return (
    <Row centered>
      <h2>You might be interested in</h2>
      <ArticleList articles={otherarticles} h3={true} cols={"2"} lineclamp={true} />
    </Row>
  );
}
