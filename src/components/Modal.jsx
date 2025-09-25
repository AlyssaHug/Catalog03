import { useRef, useEffect } from "react";

function Modal({ btnLabel, btnClassName, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }
    return (
        <>
            <button
                className={btnClassName}
                onClick={handleClick}>
                {btnLabel}
            </button>
            <dialog ref={modalRef}>
                <div>{children}</div>
            </dialog>
        </>
    );
}

export default Modal;
