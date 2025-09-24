function BookForm() {
    return (
        <div className='form-container'>
            <h2>Add a book!</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author:</label>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publish'>Publisher:</label>
                    <input
                        type='text'
                        name='bpulish'
                        placeholder='Publisher'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='year'>Publication Year:</label>
                    <input
                        type='number'
                        name='year'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='lang'>Language:</label>
                    <input
                        type='text'
                        name='lang'
                        placeholder='Language'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pages'>Pages:</label>
                    <input
                        type='number'
                        name='pages'
                    />
                </div>
                <button className='btn save'>Save</button>
            </form>
        </div>
    );
}

export default BookForm;
