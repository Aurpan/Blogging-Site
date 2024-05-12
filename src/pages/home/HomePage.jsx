import BlogHighlightCard from "./components/BlogHighlightCard";
import { Toolbar } from "primereact/toolbar";

function HomePage() {
  return (
    <div>
      <Toolbar start="Welcome to Random Blog" end="{endContent}" />

      <div className="grid">
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
      </div>
    </div>
  );
}

export default HomePage;
