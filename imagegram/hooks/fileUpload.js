import { useState, useEffect } from "react";
import storage from "../firebase/config";

const ImageUpload = (file) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(new Date().getTime() + file.name);
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        }
      );
    }
  }, [file]);

  return { error, url, progress };
};

export default ImageUpload;
