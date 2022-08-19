import { useState, useEffect } from "react";
import "./App.css";
import { fetchBookData } from "../api-calls";
import Sidebar from "../Sidebar/Sidebar";
import { BookLists } from "../Interfaces";
import TopBooks from "../TopBooks/TopBooks";
import BookGenrePage from "../BookGenrePage/BookGenrePage";
import { Route } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import loadingIcon from "../assets/orange-loading.gif";

const App = () => {
  const [bookLists, setBookLists] = useState<BookLists>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchBookData()
      .then((data) => {
        setBookLists(data.results.lists);
      })
      .catch((err: Error) => {
        console.log(err);
        setError(true);
      });
  }, [error]);

  return (
    <>
      {error ? (
        <div>
          <ErrorMessage />
        </div>
      ) : !bookLists.length ? (
        <div className="loading-container">
          <img src={loadingIcon} className="loading-icon" /> <h2>Loading...</h2>
        </div>
      ) : (
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
