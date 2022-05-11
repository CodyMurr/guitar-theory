import { createContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({children}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function toggleOpenModal() {
        setIsOpen(!modalIsOpen);
    }
    
    <ModalContext.Provider value={{ toggleOpenModal }}>
        {children}
    </ModalContext.Provider>
}

export default ModalContext;