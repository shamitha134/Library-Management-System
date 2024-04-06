import React, { useState } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchForm from "./SearchForm";
import data from "../../data.json";

const books = data.slice(0, 40);

const Catalogue = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  function searchHandler(searchParams) {
    console.log(searchParams);

    const filteredBooks = books.filter((book) => {
      if (searchParams.query === "") {
        return true;
      } else if (searchParams.type === "title") {
        return book.title
          .toLowerCase()
          .includes(searchParams.query.toLowerCase());
      } else if (searchParams.type === "author") {
        return book.author
          .toLowerCase()
          .includes(searchParams.query.toLowerCase());
      }
      return (
        book.author.toLowerCase().includes(searchParams.query.toLowerCase()) ||
        book.title.toLowerCase().includes(searchParams.query.toLowerCase())
      );
    });

    setFilteredBooks(filteredBooks);
  }

  return (
    <>
      <SearchForm onSearch={searchHandler} />
      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-10 ">
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            publicationYear={book.publicationYear}
            availability={book.availability}
            book_image={book.book_image}
          />
        ))}
      </div>
    </>
  );
};

Catalogue.propTypes = {};

export default Catalogue;
