import "./App.css";
import Button from "./components/Buttons";
import Footer from "./components/Footer";
import Book from "./components/Card";
import books from "../data/books.json";
import Header from "./components/Header";

function App() {
    function showBooks(book) {
        return <Book book={book} />;
    }

    return (
        <main>
            <Header />
            <div className='content'>
                <Button></Button>
                <div className='books'>{books.map(showBooks)}</div>
            </div>
            <Footer text='Alyssa Huggins, 2025'></Footer>
        </main>
    );
}

export default App;
