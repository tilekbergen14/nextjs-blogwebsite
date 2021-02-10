import React, { useEffect } from "react";
import ImageUpload from "../../hooks/fileUpload";

export default function Progress({
  file,
  setUrl,
  style,
  setShowbar,
  setMessage,
}) {
  const { url, progress } = ImageUpload(file);
  useEffect(() => {
    if (url) {
      setUrl(url);
      setShowbar(false);
      setMessage("Image uploaded successfully!");
    }
  }, [url]);
  return <div style={{ width: progress + "%" }} className={style}></div>;
}
