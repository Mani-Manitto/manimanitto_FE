import React, {ReactNode, useState, useEffect} from "react"
import Lottie from 'react-lottie';
import * as animationData from '../../public/image4.json';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    movePage: () => void;
    children?: ReactNode;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, name, movePage, children}) => {
    const [windowDimensions, setWindowDimensions] = useState<{height: number }>({
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(!isOpen) return null;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const lottieHeight = windowDimensions.height * 0.3;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className="character-container">
                        <Lottie options={defaultOptions} height={lottieHeight} width={lottieHeight} />
                    </div>
                    <h1 className="title">정말 '{name}' 님이 맞나요?</h1>
                    <div className="btns">
                        <button className="button1" onClick={() => movePage()}>네, 맞아요</button>
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
                    width: ${lottieHeight}px;
                    height: ${lottieHeight}px;
                    overflow: hidden;
                    margin-bottom: 20px;
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
                    padding: 20px 10px;
                    border-radius: 40px 40px 0 0;
                    height: 75%;
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