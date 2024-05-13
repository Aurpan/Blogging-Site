import { Button } from "primereact/button";

const CreateBlogButton = () => {
  return (
    <div className="flex flex-wrap align-items-center justify-content-center">
      <Button
        icon="pi pi-plus"
        className="p-button-rounded fixed floating-button"
      />
    </div>
  );
};

export default CreateBlogButton;
