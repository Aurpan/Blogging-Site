import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { useState } from "react";
import blogsLogo from "../../assets/blogsLogo.svg";

const BlogForm = () => {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState({
    textValue: "",
    htmlValue: "",
  });
  const [authorText, setAuthorText] = useState("");
  const [tagsText, setTagsText] = useState([]);

  const blogFormSubmitHandler = () => {
    console.log(contentText);
  };

  return (
    <>
      <Toolbar
        start={<h2>Create or Edit Your Post</h2>}
        end={<img src={blogsLogo} style={{ width: "100px", height: "40px" }} />}
      />

      <div style={{ padding: "5px" }}>
        <div className="card flex my-6">
          <div className="flex flex-column gap-2 md:w-full lg:w-9">
            <label htmlFor="title">Title</label>
            <InputText
              id="title"
              value={titleText}
              onChange={(e) => setTitleText(e.target.value)}
            />
          </div>
        </div>

        <div className="card flex mb-6">
          <div className="flex flex-column gap-2 md:w-full lg:w-9">
            <label htmlFor="title">Blog Content</label>
            <div className="card">
              <Editor
                style={{ height: "320px" }}
                value={contentText.htmlValue}
                onTextChange={(e) =>
                  setContentText({
                    htmlValue: e.htmlValue,
                    textValue: e.textValue,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="card flex mb-6">
          <div className="flex flex-column gap-2 md:w-full lg:w-6">
            <label htmlFor="title">Tags</label>
            <div className="card p-fluid">
              <Chips
                value={tagsText}
                onChange={(e) => setTagsText(e.target.value)}
              />
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
      </div>
    </>
  );
};

export default BlogForm;
