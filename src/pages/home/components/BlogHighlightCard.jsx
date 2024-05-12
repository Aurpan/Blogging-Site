/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { convertToHumanReadableDateString } from "../../../utility";
import "../homePage.css";

const BlogHighlightCard = ({ post }) => {
  const { id, title, author, content, date, tags } = post;

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
    const tagList = tags.split(",");

    return (
      <div className="card flex flex-wrap gap-2">
        {tagList.map((tag, index) => {
          return <Tag value={tag} key={index} rounded />;
        })}
      </div>
    );
  };

  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="card">
        <Card
          title={title}
          subTitle={prepareSubtitle}
          id={id}
          footer={blogTags}
        >
          <p className="m-0">{content}</p>
        </Card>
      </div>
    </div>
  );
};

export default BlogHighlightCard;
