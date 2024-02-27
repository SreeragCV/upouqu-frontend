import React from 'react'
import GenreList from '../components/GenreList/GenreList'
import horrorImg from '../assets/genres/horror.jpg'
import thrillerImg from '../assets/genres/thriller.jpg'
import pschologyImg from '../assets/genres/psychology.jpg'
import novelImg from '../assets/genres/novel.jpg'
import shortStoryImg from '../assets/genres/shortStory.jpg'
import philosophyImg from '../assets/genres/philosophy.jpg'
import literatureImg from '../assets/genres/literature.jpg'
import historyImg from '../assets/genres/history.jpg'
import romanceImg from '../assets/genres/romance.jpg'
import mysteryImg from '../assets/genres/mystery.jpg'
import fictionImg from '../assets/genres/fiction.jpg'
import poetryImg from '../assets/genres/poetry.jpg'
import biographyImg from '../assets/genres/biography.jpg'
import actionImg from '../assets/genres/action.jpg'
import scienceImg from '../assets/genres/science.jpg'
import fantasyImg from '../assets/genres/fantasy.jpg'
import humorImg from '../assets/genres/humor.jpg'

function GenresPage() {
  return (
    <div className='mt-28'>
      <GenreList title="Horror" image={horrorImg} />
      <GenreList title="Philosophy" image={philosophyImg} />
      <GenreList title="Psychology" image={pschologyImg} />
      <GenreList title="Novel" image={novelImg} />
      <GenreList title="Short Story" image={shortStoryImg} />
      <GenreList title="Literature" image={literatureImg} />
      <GenreList title="History" image={historyImg} />
      <GenreList title="Romance" image={romanceImg} />
      <GenreList title="Mystery" image={mysteryImg} />
      <GenreList title="Fiction" image={fictionImg} />
      <GenreList title="Action" image={actionImg} />
      <GenreList title="Poetry" image={poetryImg} />
      <GenreList title="Biography" image={biographyImg} />
      <GenreList title="Science Fiction" image={scienceImg} />
      <GenreList title="Thriller" image={thrillerImg} />
      <GenreList title="Fantasy" image={fantasyImg} />
      <GenreList title="Humor" image={humorImg} />
    </div>
  )
}

export default GenresPage
