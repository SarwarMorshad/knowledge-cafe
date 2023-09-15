import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  // console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="p-4 m-4 rounded-xl bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

Bookmark.prototype = {
  bookmark: PropTypes.object,
};
export default Bookmark;
