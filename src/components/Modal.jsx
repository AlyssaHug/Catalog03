import { useRef } from "react";

function Modal({ btnLabel, btnClassName, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    return (
        <div>
            <button
                className={btnClassName}
                onClick={handleClick}>
                {btnLabel}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
        </div>
    );
}

export default Modal;
