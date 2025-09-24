import Modal from "./Modal";
import BookForm from "./BookForm";

function Button() {
    return (
        <Modal
            btnLabel='Add new books!'
            btnClassName='button'>
            <BookForm />
        </Modal>
    );
}
export default Button;
