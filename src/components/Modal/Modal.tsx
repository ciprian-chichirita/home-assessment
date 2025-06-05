import { useRef, useEffect } from 'react';
import './Modal.css';
import Button from '../Button/Button';
import { useModalContext } from './hooks/Modal';

export const Modal = () => {
    const { isOpen, content, setContent, close } = useModalContext();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const onDowloadClickHandler = () => {
        close();
        setContent(null);
    }

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog) {
            if (isOpen) {
                if (!dialog.open) dialog.showModal();
            } else {
                dialog.close();
                close();
                setContent(null);
            }
        }

        const handleCancel = (e: Event) => {
            e.preventDefault();
            close();
        };

        dialog?.removeEventListener("cancel", handleCancel);
        dialog?.addEventListener("cancel", handleCancel);

        return () => dialog?.removeEventListener("cancel", handleCancel);
    }, [isOpen, setContent, close]);

    return (
        <dialog ref={dialogRef} className="modal-container">
            <div className="modal-content">
                <div className="modal-body">{content}</div>
                <div className="modal-button">
                    <Button onClick={onDowloadClickHandler}>Ok</Button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;