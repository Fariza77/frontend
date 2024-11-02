import Heading from "../common/Heading";
import Item from "./Item";
import "./style.scss";
import { globalContext, BASE_URL } from "../../store";
import CreateForm from "./CreateForm";
import { useEffect, useContext } from "react";
import { fetchBlogs } from "../../store/helpers";

export default function Blog(props) {
  const state = useContext(globalContext);
  useEffect(() => {
    fetchBlogsFn();
  }, []);

  async function fetchBlogsFn() {
    const data = await fetchBlogs();
    state.dispatch({ type: "SET_BLOGS", payload: data });
  }

  function activateSection(e) {
    const { name } = e.target;
    state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: name });
  }
  return (
    <div className="blog-page-wrapper">
      <Heading size={1}>
        {state.blogActivePage === "blogs" ? "Blog" : "Create new blog"}
      </Heading>

      {state.user.username && (
        <div className="action-btns">
          <button
            className="warning-btn action"
            name="blogs"
            onClick={activateSection}
          >
            Blogs
          </button>

          <button
            className="warning-btn"
            name="create"
            onClick={activateSection}
          >
            Create new blog
          </button>
        </div>
      )}
      {state.blogActivePage === "blogs" ? (
        state.blogs.length > 0 &&
        state.blogs
          .sort((a, b) => parseInt(b.id) - parseInt(a.id))
          .map((item, index) => {
            return (
              <div key={index} className="item-wrapper">
                <Item item={item} />
              </div>
            );
          })
      ) : (
        <CreateForm user={state.user} />
      )}
    </div>
  );
}
