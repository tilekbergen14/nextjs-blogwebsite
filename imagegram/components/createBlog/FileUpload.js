import React, { useState, useEffect } from "react";
import Progress from "./Progress";
import styles from "../../styles/FileUpload.module.css";

export default function FileUpload({ setUrl, url }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [showBar, setShowbar] = useState(false);

  const handleChoose = (e) => {
    const chosenFile = e.target.files[0];
    const types = ["image/jpeg", "image/png"];
    if (chosenFile && types.includes(chosenFile.type)) {
      setFile(chosenFile);
      setError("");
      setShowbar(true);
    } else {
      setFile(null);
      setUrl(null);
      setMessage(null);
      setError("Please only choose images...");
    }
  };

  useEffect(() => {
    if (!url) {
      setFile(null);
      setMessage(null);
    }
  }, [url]);

  return (
    <div className={styles.fileUpload}>
      <label className={styles.label}>
        <input type="file" onChange={handleChoose} className={styles.input} />
        Choose image
      </label>
      {error && <span className={styles.message}>{error}</span>}
      {file && <span className={styles.message}>{file.name}</span>}
      {message && <div className={styles.success}>{message}</div>}
      {showBar && (
        <Progress
          file={file}
          setUrl={setUrl}
          setShowbar={setShowbar}
          setMessage={setMessage}
          style={styles.progress}
        />
      )}
    </div>
  );
}
