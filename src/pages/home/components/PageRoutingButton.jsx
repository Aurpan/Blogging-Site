/* eslint-disable react/prop-types */
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const CreateBlogButton = (props) => {
  const { buttonPlacement, piIconClass, redirectionUrl, isPositionFixed } =
    props;

  return (
    <div className="flex flex-wrap align-items-center justify-content-center routing-button">
      <Link to={redirectionUrl}>
        <Button
          icon={`pi ${piIconClass}`}
          className={`p-button-rounded ${
            isPositionFixed ? "fixed" : ""
          } ${buttonPlacement}`}
        />
      </Link>
    </div>
  );
};

export default CreateBlogButton;
