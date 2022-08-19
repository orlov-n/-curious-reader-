import { IBook } from "../Interfaces";
import "./BookCard.css";

interface Props {
  book: IBook;
  listName: string;
}

const BookCard = ({ book, listName }: Props) => {
  return (
    <section className="book-card-container">
      <article className="book-card">
        <div className="book-image-container">
          <img className="book-image" src={book.book_image}></img>
        </div>
        <div className="description-box">
          <p className="title">{book.title}</p>
          <p className="author">by {book.author}</p>
          <p className="current-rank">NY Times Current Rank: {book.rank}</p>
          <p className="current-rank">NY Times Last Week's Rank: {book.rank_last_week}</p>
          <p className="current-rank">Number of Weeks on List: {book.weeks_on_list}</p>
          <p className="description">{book.description}</p>
          <p className="info-publishing">{book.publisher}</p>
        </div>
      </article>
      <article className="book-flag">
        <p className="flag-text">
          #{book.rank} in {listName}
        </p>
      </article>
    </section>
  );
};

export default BookCard;
