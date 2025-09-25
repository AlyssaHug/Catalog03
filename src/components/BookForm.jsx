function BookForm() {
    return (
        <div className='form-container'>
            <h2 className='formtitle'>Add a new book!</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='pr-name'>Title:</label>
                    <input
                        type='text'
                        name='pr-name'
                        placeholder='book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlForm='pr-desc'>Author:</label>
                    <input
                        type='text'
                        name='pr-desc'
                        placeholder='author'
                    />
                </div>
                <div className='form-control'>
                    <label htmlForm='pr-desc'>Publisher:</label>
                    <input
                        type='text'
                        name='pr-desc'
                        placeholder='publisher'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-price'>Publication Year:</label>
                    <input
                        type='number'
                        name='pr-price'
                    />
                </div>
                <div className='form-control'>
                    <label htmlForm='pr-desc'>Language:</label>
                    <input
                        type='text'
                        name='pr-desc'
                        placeholder='language'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-price'>Pages:</label>
                    <input
                        type='number'
                        name='pr-price'
                    />
                </div>
                <button className='save'>Save</button>
            </form>
        </div>
    );
}

export default BookForm;
