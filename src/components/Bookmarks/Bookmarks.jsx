import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks);
  return (
    <div className="md:w-1/3 rounded-2xl ml-5 bg-[#1111110D]">
      <div className="p-4 m-4 rounded-xl bg-white">
        <h3>Spend Time on Read: {readingTime}</h3>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold pl-4 py-4 m-4 rounded-xl bg-white">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.prototype = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
