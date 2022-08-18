import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import "../BookGenrePage/BookGenrePage.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import loadingIcon from "../assets/orange-loading.gif";
import { IList, BookLists } from "../Interfaces";

let defaultList: IList = {
  list_name: "",
  list_name_encoded: "",
  bestsellers_date: "",
  published_date: "",
  published_date_description: "",
  next_published_date: "",
  previous_published_date: "",
  display_name: "",
  normal_list_ends_at: 0,
  updated: "",
  books: [],
  list_id: null,
};

const BookGenrePage = ({
  listName,
  bookLists,
  error,
}: {
  listName: string;
  bookLists: BookLists;
  error: boolean;
}) => {
  const [list, setList] = useState(defaultList);
  const [genreError, setGenreError] = useState(error);

  const getListData = () => {
    const selectedGenre: IList = bookLists.find(
      (genre) => genre.list_name === listName
    );
    setList(selectedGenre);
  };

  useEffect(() => {
    getListData();
  }, [bookLists, listName]);

  const returnBooksArray = () => {
    return list.books.map((book) => {
      return <BookCard key={Math.random()} book={book} listName={listName} />;
    });
  };

  return (
    <>
      {list && (
        <section className="books-container">
          {genreError ? (
            <ErrorMessage />
          ) : !list.books.length ? (
            <img src={loadingIcon} className="loading-icon" />
          ) : (
            returnBooksArray()
          )}
        </section>
      )}
    </>
  );
};

export default BookGenrePage;
