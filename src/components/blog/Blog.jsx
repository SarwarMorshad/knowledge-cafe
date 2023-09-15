import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  //   console.log(blog);
  const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
  return (
    <div className="mb-20 border-b-4">
      <img className="w-auto mb-8 rounded-2xl" src={cover} alt={`Cover picture of ${title}`} />
      <div className="flex justify-between mt-4 mb-4">
        <div className="flex ">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div className="ml-5">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-base font-normal">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-xl font-medium mr-2">{reading_time} min read</span>
          <button className="text-2xl align-middle" onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl w-[737px] font-bold mb-4">{title}</h2>
      <p className="mb-3">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button className="text-[#6047EC] font-bold underline" onClick={() => handleMarkAsRead(reading_time)}>
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
