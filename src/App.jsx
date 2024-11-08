import { useState } from "react";
import "./App.css";
import { Blogs } from "./components/Blogs/Blogs";
import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { Header } from "./components/Header/Header";
import Swal from "sweetalert2";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    console.log("click the bookmark");
    if (bookMarks.includes(blog)) {
      // alert("Already add bookmark");
      Swal.fire("Already add bookmark");
      return;
    }
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    console.log("click the mark read time", time);

    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the reading mark read item
    console.log("remove the reading blog", id);
    const removeMarkRead = bookMarks.filter((bookMark) => bookMark?.id !== id);
    setBookMarks(removeMarkRead);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
