import { Card } from "primereact/card";

function BlogHighlightCard() {
  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="card">
        <Card title="Card Title" subTitle="Card Subtitle">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
}

export default BlogHighlightCard;
