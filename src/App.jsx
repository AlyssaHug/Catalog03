import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Buttons";
import Banner from "./Banner";
import Book from "./Card";
import books from "../data/books.json";

function App() {
    function showBooks(book) {
        return <Book book={book} />;
    }
    return (
        <body>
            <main>
                <div className='header'>
                    <Banner text='Book Catalog'></Banner>
                </div>
                <div className='content'>
                    <Button
                        className='add'
                        size='large'
                        value='New'></Button>
                    <div className='books'>{books.map(showBooks)}</div>
                </div>
                <div className='footer'>
                    <Banner text='Alyssa Huggins, 2025'></Banner>
                </div>
                <div className='background'></div>
            </main>
        </body>
    );
}

export default App;
