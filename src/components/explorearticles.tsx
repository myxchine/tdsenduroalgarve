import { Section, Row } from "@/ui/components";
import Articles from "@/components/articles";
import { getAllPosts } from "@/server/api";

export default function ExploreArticles() {
  const articles = getAllPosts();

  return (
    <Section>
      <Row>
        <div className="flex flex-col gap-2 items-center justify-center text-center md:gap-4 max-w-xl mx-auto mb-2 md:mb-8">
          <h2> <strong className="text-accent">Explore</strong> TDS Enduro Motorbike Tours Algarve</h2>
        </div>
        <Articles articles={articles} h3 />
      </Row>
    </Section>
  );
}
