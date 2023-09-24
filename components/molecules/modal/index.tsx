import {ReactNode} from "react";
import Button from "@zazora/components/atoms/button";

interface IModalProps {
    children: ReactNode
    title: string
    closeModal: () => void
    modalOpen: boolean
}

function Modal({children, title, closeModal, modalOpen = false}: IModalProps) {
    return (
        <>
            {modalOpen && (
                <div className="w-full h-screen fixed left-0 top-0 bg-black bg-opacity-50">
                    <div className="relative w-full h-full md:w-1/2 max-w-[600px] md:h-fit bg-white rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg id="visual" className="-z-10 absolute top-0 left-0 w-full text-rose rounded-lg  drop-shadow">
                            <path d="M0 138L21.5 132.7C43 127.3 86 116.7 128.8 107.8C171.7 99 214.3 92 257.2 98.2C300 104.3 343 123.7 385.8 129.2C428.7 134.7 471.3 126.3 514.2 129.7C557 133 600 148 642.8 141.7C685.7 135.3 728.3 107.7 771.2 101.8C814 96 857 112 878.5 120L900 128L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="miter">
                            </path>
                        </svg>
                        <div className="flex justify-between items-center p-4 mb-24">
                            <h2 className="text-2xl font-bold text-white">{title}</h2>
                            <Button type="button" className="!bg-rose focus:!ring-rose" onClick={closeModal}>X</Button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
