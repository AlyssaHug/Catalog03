function Book({ book }) {
    return (
        <div className='card'>
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
