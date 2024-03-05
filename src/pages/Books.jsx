import BookList from "../components/BookList/BookList";
const genres = [
  { title: "Horror" },
  { title: "Psychology" },
  { title: "Thriller" },
  { title: "Romance" },
  { title: "Fiction" },
  { title: "Poetry" },
  { title: "Biography" },
  // { title: "History" },
  // { title: "Action" },
  // { title: "Science Fiction" },
  // { title: "Mystery" },
  // { title: "Fantasy" },
  // { title: "Humor" },
];

function Books() {
  return (
    <div className="mt-24">
      {genres.map((genre) => {
        return <BookList key={genre.title} title={genre.title} />;
      })}
    </div>
  );
}

export default Books;
