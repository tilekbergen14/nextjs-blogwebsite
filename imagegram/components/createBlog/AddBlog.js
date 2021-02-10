import React, { useState, useEffect } from "react";
import FileUpload from "./FileUpload";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import Spinner from "../Spinner";

export default function AddBlog() {
  const [url, setUrl] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState({
    title: "",
    author: "",
    body: "",
    img: "",
  });

  useEffect(() => {
    setBody({ ...body, img: url });
  }, [url]);

  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content) => {
    setBody({ ...body, body: content });
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    setSpinner(true);
    const result = await axios.post("http://localhost:5000/blogs/", body);
    if (result) {
      setBody({ ...body, title: "", author: "", body: "", img: "" });
      setUrl(null);
      setSpinner(false);
    }
  };

  return (
    <div className={`container mt-4 position-relative p-0`}>
      {spinner && <Spinner />}
      <form onSubmit={submitBlog}>
        <FileUpload setUrl={setUrl} url={url} />
        <div className="input-group my-3">
          <input
            onChange={handleChange}
            type="text"
            name="title"
            className="form-control"
            required
            placeholder="Title"
            value={body.title}
          />
        </div>
        <div className="input-group mb-3">
          <input
            onChange={handleChange}
            type="text"
            name="author"
            className="form-control"
            placeholder="Author"
            value={body.author}
          />
        </div>
        <Editor
          apiKey="vg0xjcazbqoqck8epvkf9drt57lat3tyo4yycxzxupilmq1o"
          value={body.body}
          init={{
            height: 500,
            content_style:
              "body{font-family: 'Prata', serif;} h1, h2, h3, h4, h5, h6, p{ margin: 0 0 16px 0}",
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks fullscreen imagetools",
              "insertdatetime media table paste help wordcount codesample",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | fontselect | image imagetools |bullist numlist outdent indent | removeformat | help | codesample | blockquote | pre",
          }}
          onEditorChange={handleEditorChange}
        />
        <button
          disabled={url ? false : true}
          className="btn my-3"
          style={
            url
              ? {
                  backgroundColor: "#43dde6",
                  color: "#fff",
                  fontWeight: "bold",
                }
              : {
                  backgroundColor: "gray",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "no-drop",
                }
          }
        >
          Upload
        </button>
      </form>
    </div>
  );
}
