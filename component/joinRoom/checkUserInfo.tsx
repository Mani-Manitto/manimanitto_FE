import React, {ReactNode} from "react"
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, name, children}) => {
    if(!isOpen) return null;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className="character-container">
                        <iframe src="https://lottie.host/embed/05967cc6-c420-4148-8225-cd093b7bf563/mSKmU4VQ0m.json"></iframe>
                    </div>
                    <h1 className="title">정말 '{name}' 님이 맞나요?</h1>
                    <div className="btns">
                        <button className="button1">네, 맞아요</button>
                        <button className="button2" onClick={() => onClose()}>제 이름이 아니에요</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 999;
                    display: flex;
                    justify-content: bottom;
                    align-items: center;
                }

                .character-container {
                    position: relative;
                    width: 225px;
                    height: 225px;
                    overflow: hidden;
                }

                iframe{
                    border: none;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .modal {
                    align-self: flex-end;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    background-color: #ffffff;
                    padding: 30px 10px;
                    border-radius: 40px 40px 0 0;
                    height: 60%;
                    width: 100%;
                    max-height: 80vh;
                    overflow-y: auto;
                }

                .title {
                    text-align: center;
                }

                .btns {
                    text-align: center;
                }
                .btns button {
                    display: inline-block;
                    margin: 10px;
                }

                `}
            </style>
        </>
    )
}

export default Modal;