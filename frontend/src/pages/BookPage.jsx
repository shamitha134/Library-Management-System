const BookPage = ({
  book_image,
  title,
  author,
  publicationYear,
  description,
  availability,
}) => {
  return (
    <div className="md:flex md:items-center md:justify-center md:gap-8">
      <div className="md:shadow-2xl">
        <img
          className="w-full md:min-w-[300px] object-cover"
          src={book_image}
          alt="book_image"
        />
      </div>
      <div className="mt-4 text-center md:max-w-md md:text-left md:p-8">
        <h1 className="font-bold text-2xl md:text-4xl md:mb-4">{title}</h1>
        <div className="md:text-lg">
          <p>
            <span className="md:font-medium text-text">Author:</span> {author}
          </p>
          <p>
            <span className="md:font-medium text-text">Publication Year:</span>{" "}
            {publicationYear}
          </p>
        </div>
        <p className="mt-4 text-left p-4 md:p-0 md:mt-10">
          <span className="block mb-1 font-medium md:text-lg text-text">
            Description:
          </span>
          {description}
        </p>
        <button
          disabled={!availability}
          className="cursor-pointer w-full mt-4 py-3 md:mt-10 bg-accent/80 hover:bg-accent rounded-md text-white font-semibold"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

BookPage.propTypes = {
  book_image: String,
  title: String,
  author: String,
  publicationYear: Number,
  description: String,
  availability: Boolean,
};

export default BookPage;
