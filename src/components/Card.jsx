import { useState } from "react";

function Book({ book }) {
    const [darkened, setDarkened] = useState(false);

    function handleClick(e) {
        if (e.target.tagName === "SPAN") {
            e.currentTarget.remove();
            return;
        }

        setDarkened((prev) => !prev);
    }
    return (
        <div
            className={`card ${darkened ? "darkened" : ""}`}
            onClick={handleClick}>
            <span>Remove</span>

            <img
                className='cardImg'
                src={book.image}
                alt={book.title}
            />
            <h3 className='bk-price'>{book.price}</h3>
            <h3 className='learn'>
                <a
                    href={book.url}
                    target='_blank'>
                    Learn More
                </a>
            </h3>
        </div>
    );
}
export default Book;
