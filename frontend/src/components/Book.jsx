import { NavLink } from "react-router-dom";

const Book = ({ title, author, publicationYear, book_image, id }) => {
  return (
    <NavLink className="block" to={`/book/${id}`}>
      <div className="max-w-fit">
        <img src={book_image} alt="book image" />
        <div title={title} className="flex flex-col mt-2">
          <span className="font-medium text-text overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </span>
          <span className="text-gray-500">{author}</span>
          <span className="text-gray-500">{publicationYear}</span>
        </div>
      </div>
    </NavLink>
  );
};

Book.propTypes = {
  book_image: String,
  title: String,
  author: String,
  publicationYear: Number,
  description: String,
  id: Number,
  availability: Boolean,
};

export default Book;
