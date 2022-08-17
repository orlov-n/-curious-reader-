import React from "react";
import { IBookLists } from "../Interfaces";
import BookCard from "../BookCard/BookCard";
import "../TopBooks/TopBooks.css";
import loadingIcon from "../assets/orange-loading.gif";

const TopBooks = ({ bookLists }: IBookLists) => {
  const numberOneBooks = bookLists.map((list) => {
    return (
      <BookCard
        key={list.list_id}
        book={list.books[0]}
        listName={list.display_name}
      />
    );
  });
  
  return (
    !bookLists.length ? 
      <img src={loadingIcon} className="loading-icon" />
    : <section className="top-books-container">{numberOneBooks}</section>

    
   
  ) 
};

export default TopBooks;
