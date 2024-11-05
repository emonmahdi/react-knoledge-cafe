import { useState } from "react";
import "./App.css";
import { Blogs } from "./components/Blogs/Blogs";
import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { Header } from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState();

  const handleBookMark = () => {
    console.log("click the bookmark");
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Blogs handleBookMark={handleBookMark} />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
