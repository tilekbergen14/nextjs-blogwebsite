import React, { useState } from "react";
import { TextField, List, ListItem } from "@material-ui/core";
import axios from "axios";

export default function referats() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = async (e) => {
    setSearch(e.target.value);
    const result = await axios.post("http://localhost:5000/search/", {
      search: search,
    });
    setResult(result.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search it");
  };

  return (
    <div className="m-5 d-flex justify-content-center">
      <div className="bg-color p-5 border-radius shadow">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            value={search}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleChange}
          />
        </form>
        <List className="mt-3 bg-light">
          {result.map((res) => (
            <ListItem key={res.id} className="border-bottom">
              {res.title}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
