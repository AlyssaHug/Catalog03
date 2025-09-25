import Modal from "./Modal";
import BookForm from "./BookForm";

function Button() {
    return (
        <div>
            <Modal
                btnClassName='button'
                btnLabel='Add new books!'>
                <BookForm />
            </Modal>
        </div>
    );
}
export default Button;
