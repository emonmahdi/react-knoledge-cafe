import { useState } from "react";
import "./App.css";
import { Blogs } from "./components/Blogs/Blogs";
import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { Header } from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMark = (blog) => {
    console.log("click the bookmark");
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Blogs handleBookMark={handleBookMark} />
        <Bookmarks bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
