import Heading from "../common/Heading";
import "./createForm.scss";
import { useState, useContext } from "react";
import { BASE_URL, globalContext } from "../../store";
import { toast } from "react-toastify";
import { fetchBlogs } from "../../store/helpers";
import BlogForm from "./BlogForm";
import BlogDetails from "./BlogDetails";

// 1. GET    - GET data from the server  => fetch(URL)
// 2. POST   - SEND data to the server   => fetch(URL,{ method: "POST", body: JSON.stringify(data) })
// 3. PUT    - UPDATE data to the server  => fetch(URL, {method: "PUT", body: JSON.stringify(data)})
// 4. PATCH  - PARTIAL UPDATE data        => fetch(URL, {method: "PATCH", body: JSON.stringify()})
// 5. DELETE  - DELETE data from the server => fetch(URL, {method: "DELETE"})

export default function CreateForm(props) {
  const [form, setForm] = useState({
    author: props.user,
    date: new Date().toLocaleDateString(),
    title: props.blogObject ? props.blogObject.title : "",
    image: "",
    subtitle1: props.blogObject ? props.blogObject.subtitle1 : "",
    subtitle2: props.blogObject ? props.blogObject.subtitle2 : "",
  });

  const state = useContext(globalContext);

  async function submit(e) {
    e.preventDefault();
    try {
      let data = { ...form };
      if (!props.updateMode) {
        data.id = String(new Date().getTime());
      }
      const URL =
        BASE_URL +
        (props.updateMode ? "blogs/" + props.blogObject.id : "blogs");
      const METHOD = props.updateMode ? "PUT" : "POST";
      fetch(URL, {
        method: METHOD,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(async (data) => {
          toast.success(
            `Blog ${props.updateMode ? "updated" : "created"} successfully `
          );
          const payload = await fetchBlogs();
          state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: payload });

          if (props.updateMode) {
            props.goBack();
            window.location.reload();
          } else {
            state.dispatch({ type: "SET_BLOG_ACTIVE_PAGE", payload: "blogs" });
          }
        });
    } catch (e) {
      console.log(e);
      toast.error(`Error ${props.updateMode ? "updating" : "creating"} blog`);
    }
    setForm({
      author: props.user,
      date: new Date().toLocaleDateString(),
      title: "",
      image: "",
      subtitle1: "",
      subtitle2: "",
    });
  }

  function handleStateForm(e) {
    const { name, value } = e.target;
    if (name !== "image") {
      setForm({ ...form, [name]: value });
    } else {
      // const imageFile = e.target.files[0];
      // const fileReader = new FileReader();
      // fileReader.readAsDataURL(imageFile);
      // fileReader.onload = (e) => {
      //   setForm({ ...form, image: fileReader.result });
      // };
    }
  }
  return (
    <div className="blog-create-form-page">
      {props.updateMode && (
        <div className="action-btns">
          <button className="warning-btn back-btn" onClick={props.goBack}>
            <span style={{ marginRight: "5px" }}>&lArr;</span> Go back
          </button>
        </div>
      )}

      <Heading size={1}>{props.updateMode ? "Update" : "Create"} Blog</Heading>
      <BlogForm
        submit={submit}
        handleStateForm={handleStateForm}
        form={form}
        submitButtonText={props.updateMode ? "Update" : "Create"}
      />
    </div>
  );
}
