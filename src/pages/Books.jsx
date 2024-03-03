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
const genres = [
  { title:"Horror" },
{title:"Psychology"}, {title:"Thriller"}
]


function Books() {
  return (
    <div className="mt-24">
      {
        genres.map(genre=>{
          return <BookList title = {genre.title}/>
        })
      }
      <BookList title="Psychology" />
      <BookList title="Thriller"/>
      <BookList title="Novel" />
      <BookList title="Short Story" />
      <BookList title="Philosophy" />
      <BookList title="Literature" />
      {/* <BookList title="History" url={history} />
      <BookList title="Romance" url={romance}/>
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
