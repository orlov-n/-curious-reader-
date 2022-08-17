import { useState, useEffect } from "react";
import "./App.css";
import { fetchBookData } from "../api-calls";
import Sidebar from "../Sidebar/Sidebar";
import { IList, IBookLists, IError } from "../Interfaces";
import TopBooks from "../TopBooks/TopBooks";
import BookGenrePage from "../BookGenrePage/BookGenrePage";
import { NavLink, Route } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BookIcon from "../assets/book.png";
import loadingIcon from "../assets/orange-loading.gif";


const App = () => {
  const [bookLists, setBookLists] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBookData()
      .then((data) => {
        setBookLists(data.results.lists);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [error]);

  return (
    <>
      {error ? (
        <div>
          <ErrorMessage />
        </div>
      ) : (
        !bookLists.length ? 
       

          ( <div><img src={loadingIcon} className="loading-icon" /> <h1>Page Loading</h1></div>):
        
        <>
          <Sidebar bookLists={bookLists} />

          <Route
            exact
            path="/"
            render={() => <TopBooks bookLists={bookLists} />}
          />

          <Route
            exact
            path="/:list_name"
            render={({ match }) => {
              return (
                <BookGenrePage
                  listName={match.params.list_name}
                  bookLists={bookLists}
                  error={error}
                />
              );
            }}
          />
        </>
      )}
    </>
  );
};

export default App;
