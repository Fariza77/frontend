import { Link, useParams, useNavigate } from "react-router-dom";
import "./blogDetails.scss";
import blogImg1 from "../../assets/images/blog-1.png";
import blogImg2 from "../../assets/images/blog-2.png";
import blogImg3 from "../../assets/images/blog-3.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import { useEffect, useState } from "react";
import { BASE_URL, globalContext } from "../../store";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import BlogForm from "./BlogForm";
import CreateForm from "./CreateForm";
import { useContext } from "react";


export default function BlogDetails(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogObject, setBlogObject] = useState({});
  const [showUpdateSection, setShowUpdateSection] = useState(false);
  const state = useContext(globalContext)


  let images = [blogImg1, blogImg2, blogImg3, img1, img2];
  let image = images[parseInt(id) % images.length];

  function goToTopSmoothly() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    goToTopSmoothly();
    fetchBlog();
  }, []);

  function fetchBlog() {
    state.dispatch({ type: "SET_LOADED", payload: false })
    try {
      fetch(BASE_URL + "blogs/" + String(id))
      .then(response => response.json())
      .then(data => {
        setBlogObject(data)
        document.title = getIntro(data.title) + "..."
        state.dispatch({type: "SET_LOADED", payload: true})
      })
    } catch (e) {
      console.log(e)
    }
  }

  function getIntro(title) {
    return title?.split(" ").slice(0, 3).join(" ");
  }

  function requestDeleteBlog(e) {
    if (confirm("Are you sure to delete this blog?")) {
      fetch(BASE_URL + "blogs/" + String(id), {
        method: "DELETE",
      }).then((response) => console.log(response));
      toast.success("Blog deleted successfully!", { theme: "dark" });
      navigate("/blog");
    } else {
      return
    }
  }

  function requestEditBlog(e, status = true) {
    setShowUpdateSection(status)

  }
  return (
    <div className="blog-details-wrapper">
      <p className="intro">Blog/{getIntro(blogObject.title)}</p>
      <h1 className="title">{blogObject.title}</h1>
      <p className="author-date">
        <span>{blogObject.author?.username},</span>{" "}
        <span>{blogObject.date}</span>
      </p>

      <button className="warning-btn" onClick={requestEditBlog}>
        <FaEdit />
        update
      </button>
      <button className="warning-btn del-btn" onClick={requestDeleteBlog}>
        <FaRegTrashCan />
        delete
      </button>

      {showUpdateSection ? (
        <CreateForm blogObject={blogObject} updateMode={true} user={blogObject.author} />
        //NOTE: 
        //1. Call the component 
        //2. Send props blockObject
        //3. Inside the component use blockObject for default values for inputs
        //4. Inside the component if the blockObject is not present we assume that the form is being called by create blog button
        //5. For component to identify if it is create mode or update mode we can send it additional prop like : updateMode='true'

      ) : (
        <>
          <img src={image} width={"100%"} height={400} />
          <p className="subtitle1">{blogObject.subtitle1}</p>
          <p className="subtitle2">{blogObject.subtitle2}</p>
          <h2>Интересное по теме</h2>
          <div className="row">
            <div className="left">
              <h3>Рэй Далио перестал считать наличные «мусором»</h3>
              <Link to="#">Подробнее &rArr;</Link>
            </div>
            <div className="right">
              <h3>
                Инвестиции в 5G – необходимое условие экономического развития
              </h3>
              <Link to="#">Подробнее &rArr;</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
