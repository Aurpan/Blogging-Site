import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Chips } from "primereact/chips";

const BlogForm = () => {
  return (
    <>
      <div>
        <h1>Create Blog</h1>
      </div>

      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 w-full">
          <label htmlFor="title">Title</label>
          <InputText id="title" />
        </div>
      </div>

      <div className="card flex mb-6">
        <div className="flex flex-column gap-2 w-full">
          <label htmlFor="title">Blog Content</label>
          <div className="card">
            <Editor style={{ height: "320px" }} />
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
          <InputText id="title" />
        </div>
      </div>
    </>
  );
};

export default BlogForm;
