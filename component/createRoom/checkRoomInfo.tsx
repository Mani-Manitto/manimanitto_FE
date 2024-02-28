import React, {ReactNode} from "react"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <h1 className="title">마니또지기님,<br/>이 구성원 정보가 맞나요?</h1>
                    <p className="subTitle">이 창을 지나면 다시 수정할 수 없어요</p>
                    {children}
                    <div className="btns">
                        <button className="button1">네, 맞아요</button>
                        <button className="button2" onClick={() => onClose()}>아니에요, 수정할래요</button>
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

                .modal {
                    align-self: flex-end;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #ffffff;
                    padding: 50px 10px;
                    border-radius: 40px 40px 0 0;
                    height: 80%;
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
                    margin: 5px;
                }

                `}
            </style>
        </>
    )
}

export default Modal;