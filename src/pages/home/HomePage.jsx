import BlogHighlightCard from "./components/BlogHighlightCard";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { SpeedDial } from "primereact/speeddial";
import blogsLogo from "../../assets/blogsLogo.svg";

function HomePage() {
  const searchBar = (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText v-model="value1" placeholder="Search" />
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
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
        <BlogHighlightCard />
      </div>
    </div>
  );
}

export default HomePage;
