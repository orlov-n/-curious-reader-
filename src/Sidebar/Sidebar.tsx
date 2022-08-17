import React from "react";
import { IBookLists } from "../Interfaces";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import BookIcon from "../assets/book.png";

const Sidebar = ({ bookLists }: IBookLists) => {
  console.log("genres from sidebar", bookLists);
  const bookGenres = bookLists.map((list) => {
    return (
     
        <NavLink
          key={list.list_id}
          to={`/${list.list_name}`}
          style={{ textDecoration: "none" }}
        >
          <p className="genre-links">{list.display_name}</p>
        </NavLink>
      
    );
  });

  return (

 <nav>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <article className="header-container">
            <h1>Curious Reader</h1>
            <img src={BookIcon} className="book-icon" />
          </article>
        </NavLink>
   <section className="genres-container">
    
    {bookGenres}
    </section>;
    </nav>
  )
};

export default Sidebar;
