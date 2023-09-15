import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    /* const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark); */
    setBookmarks([...bookmarks, blog]);
  };

  const handleMarkAsRead = (time) => {
    // console.log("marking as read", time);
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto pl-4 pt-4">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
