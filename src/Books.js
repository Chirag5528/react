import React from 'react';
import "./css/Books.css"

import {BooksData} from './booksData';
import {BooksLists} from './booksList';

// Making a Booklists component
const Books = () => {
    return ( 
        <section className='section__app__books'>
        {BooksData.map( (book) => {
            return (
            <BooksLists key={book.id} {...book} />    
            )
        })}
        </section>
        
    )
}

export default Books;