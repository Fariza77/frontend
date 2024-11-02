
import { useEffect } from "react";
import addImage from "../../assets/images/addImage.png";

export default function BlogForm(props) {
  useEffect(() => {
    console.log(props.form)
  },[])
  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="left">
          <div className="form-control">
            <div className="intro">
              <label>
                Author: <span>{props.form?.author?.username}</span>
              </label>
              <label>
                Date: <span>{props.form.date}</span>
              </label>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="title">Blog title</label>
            <input
              type="text"
              name="title"
              placeholder="blog title"
              id="blog-title"
              onChange={props.handleStateForm}
              value={props.form.title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="blog-image">Blog image</label>
            <div className="nft-img-wrapper">
              <input
                type="file"
                id="blog-image"
                placeholder="blog image"
                name="image"
                onChange={props.handleStateForm}
              />
              <img src={addImage} />
              <small>Upload or drag here</small>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="form-control">
            <label htmlFor="">Content</label>
            <textarea
              name="subtitle1"
              placeholder="Content"
              onChange={props.handleStateForm}
              value={props.form.subtitle1}
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="">Additional information</label>
            <textarea
              name="subtitle2"
              placeholder="Additional information"
              onChange={props.handleStateForm}
              value={props.form.subtitle2}
            ></textarea>
          </div>
          <div className="form-control">
            <button type="submit" className="warning-btn">
              { props.submitButtonText } Blog 
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}



