import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },
  {
    id: 4,
    img: "https://images-eu.ssl-images-amazon.com/images/I/61-hMfd7NGL._AC_UL600_SR600,400_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    id: 5,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71CrTyKsazL._AC_UL600_SR600,400_.jpg",
    title: "Indian Polity for UPSC",
    author: "M Laxmikanth",
  },
  {
    id: 6,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL600_SR600,400_.jpg",
    title: "The Power of Your Subconscious Mind: Original Edition",
    author: "Joseph Murphy",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const handleClick = (title, author) => {
    console.log("Title:", title);
    console.log("Author:", author);
  };

  const handleTitle = () => {
    document.title = `Author: ${author}`;
  };

  return (
    <article className="book">
      <img src={img} alt="" className="image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => handleClick(title, author)}>
        Click to log details
      </button>

      <br />
      <button type="button" onClick={handleTitle}>
        click to change page Title
      </button>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
