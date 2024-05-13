/* eslint-disable react/jsx-key */
import { useState } from "react";
import BlogHighlightCard from "./components/BlogHighlightCard";
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
    const searchValue = e.target.value;
    setSearchFilter(searchValue);  

    if (searchValue === "") {
      setBlogList(blogPosts);
      return;
    }

    const filteredBlogs = blogPosts.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.tags.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchValue.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchValue.toLowerCase())
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
    </div>
  );
}

export default HomePage;
