import React, { useEffect, useState } from "react";
import api from "../api";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getNotes = async () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log("notes :", data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = async (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("The note deleted.");
          getNotes();
        } else alert("Failed to delete the note.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created.");
          getNotes();
        } else alert("Failed to create note.");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div>
        <h2>Notes</h2>
      </div>

      <h2>Create a note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <br />

        <label htmlFor="content">Content</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <br />

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
