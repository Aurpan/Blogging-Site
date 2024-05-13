/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { convertToHumanReadableDateString } from "../../../utility";
import "../homePage.css";

const BlogHighlightCard = ({ post }) => {
  const { id, title, author, contentText, date, tags } = post;

  const prepareSubtitle = () => {
    return (
      <div className="blogCard-subtitle">
        Author: <i>{author}</i>
        <br />
        Posted on: <i>{convertToHumanReadableDateString(date)}</i>
      </div>
    );
  };

  const blogTags = () => {
    return (
      <div className="card flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          return <Tag value={tag} key={index} rounded />;
        })}
      </div>
    );
  };

  const cardClickHandler = (e) => {
    console.log(id);
  };

  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="card">
        <Card
          title={title}
          subTitle={prepareSubtitle}
          id={id}
          footer={blogTags}
          onClick={cardClickHandler}
          className="blog-highlight-card"
        >
          <p className="m-0">{contentText}</p>
        </Card>
      </div>
    </div>
  );
};

export default BlogHighlightCard;
