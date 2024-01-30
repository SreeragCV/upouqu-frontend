import React, { useEffect, useState } from "react";
import "./BookList.css";

function BookList() {
  const allBooks = [
    {
      book_id: "7ef80e15-b187-42a7-92b3-b155cea21df8",
      book_name: "Duky",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-7q=d&w=d&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 8,
      user_id: "cb59630e-9fab-40e3-bf17-6ab60f3f9e7a",
      genre: "Drama|Thriller",
    },
    {
      book_id: "32cc8e0a-14b5-4108-b185-f4ad1d770cfe",
      book_name: "Kristen",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-2+q=ddd&w=dd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 64,
      user_id: "22ef7716-bff8-4d94-a007-971b4a4f84ea",
      genre: "Comedy|Horror|Mystery",
    },
    {
      book_id: "f8e92d4f-e428-4443-9bab-9d89147fdc36",
      book_name: "Ted",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-M+q=d&w=dd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 43,
      user_id: "7d1ecd3d-eb60-4afe-956e-5f39d37466e4",
      genre: "Documentary",
    },
    {
      book_id: "6623eabd-3b01-4e62-9d18-47f1e7a62b71",
      book_name: "Ingra",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-M+q=d&w=dd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 71,
      user_id: "421f89e6-c579-4a94-9fd3-10bb9bb209ed",
      genre: "Comedy|Drama",
    },
    {
      book_id: "3ddb28e5-83d5-4b07-87c4-2a59a4e44f67",
      book_name: "Corbin",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-r+q=dd&w=d&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 41,
      user_id: "beeba74f-bca2-400e-9b8c-006bff9bb5fe",
      genre: "Comedy|Romance",
    },
    {
      book_id: "abb584a6-0267-4834-b3fa-2d2d1b8822da",
      book_name: "Justinn",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-Yq=d&w=dddd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 24,
      user_id: "d553ea8c-2d1c-4575-b436-6f25b9f6bb4f",
      genre: "Drama",
    },
    {
      book_id: "cd5c265b-7f85-4be2-9b99-74c56816f312",
      book_name: "Tucker",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-Q+q=d&w=dd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 82,
      user_id: "db2d457c-b867-49bd-a4c5-f14899792fb9",
      genre: "Drama",
    },
    {
      book_id: "e59e720e-d39b-40e1-9500-5acc5bf0eca0",
      book_name: "Dieter",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-5q=dd&w=dddd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 74,
      user_id: "befd56bc-a298-467d-9dc2-d8185c996b7b",
      genre: "Animation|Musical",
    },
    {
      book_id: "2168981f-b386-400d-8bcd-93d6ec0a110b",
      book_name: "Sutton",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-g+q=d&w=dd&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 48,
      user_id: "1daa0989-fecd-454c-b24d-e8a7919e5428",
      genre: "Drama|Romance",
    },
    {
      book_id: "5f6639fe-9d23-4468-83c1-4e99a8fb09e8",
      book_name: "Steffane",
      image_url:
        "https://images.unsplash.com/photo-ddddddddddddd-0+q=ddd&w=d&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      total_page: 77,
      user_id: "e72da6b8-8d6c-4670-a169-7d57f6bc0c26",
      genre: "Comedy|Crime",
    },
    {
      book_id: "2df5bc81-b017-4db4-a55f-460624634086",
      book_name: "Frederique",
      image_url:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd",
      total_page: 16,
      user_id: "ccc641cc-e14a-4f01-9898-fe5ffbb8812b",
      genre: "Horror|Sci-Fi|Thriller",
    },
  ];

  return (
    <div className="row">
      <h2>BOOKS</h2>
      <div className="posters">
        {allBooks.map((book, i) => (
          <div key={i}>
            <img className="poster" src={book.image_url} key={i} />
            <h4>{book.book_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
