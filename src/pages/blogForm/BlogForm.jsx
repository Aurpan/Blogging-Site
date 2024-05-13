import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";
import { useState } from "react";

const BlogForm = () => {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [tagsText, setTagsText] = useState("");

  const blogFormSubmitHandler = (e) => {
    // console.log(authorText);
    // console.log(titleText);
    console.log(contentText);
  };

  return (
    <>
      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 w-full">
          <label htmlFor="title">Title</label>
          <InputText
            id="title"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
        </div>
      </div>

      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 w-full">
          <label htmlFor="title">Blog Content</label>
          <div className="card">
            <Editor
              style={{ height: "320px" }}
              value={contentText}
              onTextChange={(e) => setContentText(e.htmlValue)}
            />
          </div>
        </div>
      </div>

      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 md:w-full lg:w-6">
          <label htmlFor="title">Tags</label>
          <div className="card p-fluid">
            <Chips />
          </div>
          <small>
            ** write something and press 'Enter' to add relevant Tags for your
            blog post
          </small>
        </div>
      </div>

      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 md:w-full lg:w-6">
          <label htmlFor="title">Author Name</label>
          <div className="card p-fluid">
            <InputText
              id="title"
              value={authorText}
              onChange={(e) => setAuthorText(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-content-center lg:justify-content-end">
        <Button
          label="Cancel"
          className="flex justify-content-center border-round m-2"
          outlined
          severity="danger"
        />
        <Button
          label="Submit"
          className="flex justify-content-center border-round m-2"
          onClick={blogFormSubmitHandler}
        />
      </div>
    </>
  );
};

export default BlogForm;
