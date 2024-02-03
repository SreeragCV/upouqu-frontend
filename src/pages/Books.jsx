import React from 'react'
import BookList from '../components/BookList/BookList'

function Books() {
  return (
    <div>
      <BookList title="Horror"/>
      <BookList title="Comedy"/>
      <BookList title="Psychology" />
      <BookList title="History" />
    </div>
  )
}

export default Books
