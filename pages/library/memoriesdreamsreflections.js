import Book from "../../components/Book";
import book from "../../library/memoriesdreamsreflections.json";
import React from "react";
import { compose } from "lodash/fp";
import decorate from "../../hoc/decorate";

function BookPage() {
  return <Book book={book} />;
}

export default compose(decorate({ name: "Book - " + book.volumeInfo.title }))(
  BookPage
);
