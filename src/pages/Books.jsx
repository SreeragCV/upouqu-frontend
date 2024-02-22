import BookList from "../components/BookList/BookList";
import { horror } from "../utils/genreUrls";

function Books() {

  return (
    <div className=" mt-20">
      <BookList title="Horror" url={horror} />
      <BookList title="Comedy" />
      <BookList title="Psychology" />
      <BookList title="History" />
    </div>
  );
}

export default Books;
