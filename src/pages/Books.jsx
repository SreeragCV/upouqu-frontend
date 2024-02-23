import BookList from "../components/BookList/BookList";
import {
  horror,
  psychology,
  thriller,
  novel,
  shortStory,
  philosophy,
  literature,
  history,
  romance,
  mystery,
  fiction,
  poetry,
  biography,
  action,
  scienceFiction,
  fantasy,
  humor
} from "../utils/genreUrls";

function Books() {
  return (
    <div className="mt-24">
      <BookList title="Horror" url={horror} />
      <BookList title="Psychology" url={psychology} />
      <BookList title="Thriller" url={thriller}/>
      <BookList title="Novel" url={novel} />
      <BookList title="Short Story" url={shortStory} />
      <BookList title="Philosophy" url={philosophy}/>
      <BookList title="Literature" url={literature} />
      <BookList title="History" url={history} />
      {/* <BookList title="Romance" url={romance}/>
      <BookList title="Fiction" url={fiction} />
      <BookList title="Poetry" url={poetry} />
      <BookList title="Biography" url={biography} />
      <BookList title="Action" url={action} />
      <BookList title="Science Fiction" url={scienceFiction} />
      <BookList title="Mystery" url={mystery} />
      <BookList title="Fantasy" url={fantasy} />
      <BookList title="Humor" url={humor} /> */}
    </div>
  );
}

export default Books;
