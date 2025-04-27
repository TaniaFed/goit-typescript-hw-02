export interface IModal {
    modalIsOpen: boolean;
    closeModal: () => void;
    src?: string;
    alt: string;
}