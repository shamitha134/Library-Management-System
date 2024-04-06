import React, { useRef } from "react";
import PropTypes from "prop-types";

const currentYear = new Date().getFullYear();

const SearchForm = ({ onSearch }) => {
  const searchQueryRef = useRef(null);
  const searchTypeRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();
    const searchParams = {
      query: searchQueryRef.current.value,
      type: searchTypeRef.current.value,
    };

    onSearch(searchParams);

    // clear the input values
    // searchQueryRef.current.value = "";
    // searchTypeRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4 sm:flex max-w-3xl  items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
        <input
          className="text-base text-text flex-grow outline-none px-2 "
          type="text"
          ref={searchQueryRef}
          placeholder="Search for title, author"
        />
        <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
          <select
            ref={searchTypeRef}
            id="Com"
            className="text-base bg-transparent text-accent outline-none p-2 rounded-lg"
          >
            <option value="">Filter</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          <button
            type="submit"
            className="bg-accent text-white text-base rounded-full shadow-xl px-4 py-1 font-thin"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
