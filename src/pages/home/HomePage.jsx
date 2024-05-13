/* eslint-disable react/jsx-key */
import { useState } from "react";
import BlogHighlightCard from "./components/BlogHighlightCard";
import CreateBlogButton from "./components/CreateBlogButton";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import blogPosts from "../../service/dataService";
import blogsLogo from "../../assets/blogsLogo.svg";

function HomePage() {
  const [blogList, setBlogList] = useState(blogPosts);
  const [searchFilter, setSearchFilter] = useState("");

  const searchKeyChangeHandler = (e) => {
    let searchValue = e.target.value;
    setSearchFilter(searchValue);

    if (searchValue === "") {
      setBlogList(blogPosts);
      return;
    }

    searchValue = searchValue.toLowerCase();
    const filteredBlogs = blogPosts.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchValue) ||
        blog.contentText.toLowerCase().includes(searchValue) ||
        blog.author.toLowerCase().includes(searchValue) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(searchValue))
    );
    setBlogList(filteredBlogs);
  };

  const searchBar = (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText
        placeholder="Search"
        value={searchFilter}
        onChange={searchKeyChangeHandler}
      />
    </IconField>
  );

  return (
    <div>
      <Toolbar
        start={
          <img src={blogsLogo} style={{ width: "200px", height: "80px" }} />
        }
        end={searchBar}
      />

      <div className="grid">
        {blogList.map((post) => (
          <BlogHighlightCard post={post} />
        ))}
      </div>

      <CreateBlogButton />
    </div>
  );
}

export default HomePage;
