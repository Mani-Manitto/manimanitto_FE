import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import KakaoBtn from "@/component/common/KaKaoBtn";
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Lottie from 'react-lottie';
import * as animationData from '../../public/image2.json';

export default function CreateComplete() {
    const router = useRouter();
    const [copyUrl, setCopyUrl] = useState<string>('');
    const [copyCode, setCopyCode] = useState<string>('');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const copyUrlToClipboard = () => {
        navigator.clipboard.writeText(copyUrl)
            .then(() => {
                console.log('링크가 성공적으로 복사되었습니다.');
                // 복사가 성공하면 여기에 추가적인 로직을 추가할 수 있습니다.
            })
            .catch((error) => {
                console.error('링크 복사 중 오류 발생:', error);
            });
    };


    useEffect(() => {
        const roomCode: string = router.query.roomCode?.toString() || '';
        console.log("방코드:",roomCode);
        setCopyCode(roomCode);
        setCopyUrl(`/joinManito/joinMain/${roomCode}`);

    }, [router.query.roomCode])

  return (
    <>
        <div className="container">
            <div className="character-container">
                <Lottie options={defaultOptions} height={275} width={275} />
            </div>
            <div className="greeting">
                <p>마니또 초대장이 <br/>만들어졌어요!</p>
            </div>
            <div className="btns">
                {/* <div className="kakaoBtn">
                    <button>
                        <Image src="/image 68.png" width={120} height={120} alt="카카오톡 로고" />
                    </button>
                    카카오톡 공유
                </div> */}
                <KakaoBtn 
                    description=" 💌 마니또 초대장 도착 💌

                        즐거운 마니또 세계로 오신걸 환영합니다!
                        마니또를 확인하고 행복한 시간을 보내요!" 
                    roomCode={copyCode} 
                />
                <div className="copyBtn">
                    <button onClick={copyUrlToClipboard}>
                        <ContentCopyIcon style={{color: "white", width: 50, height: 50 }} />
                    </button>
                    링크 복사
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .container {
                    padding: 30px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
                .greeting {
                    text-align: center;
                }
                
                .greeting p{
                    font-size: 32px;
                }

                .btns {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }

                .btns div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }

                .kakaoBtn button {
                    border: none;
                    background-color: #ffffff;
                }

                .copyBtn button {
                    border: none;
                    background-color: #00C5B3;
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
                }

                .character-container {
                    position: relative;
                    width: 300px;
                    height: 300px;
                    overflow: hidden;
                }

                .character-container::before {
                    content: '';
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    left: -50%;
                    background-color: #bceceb;
                    border-radius: 50%;
                    z-index: -1;
                }

                iframe{
                    border: none;
                    position: relative;
                    width: 100%;
                    height: 100%;

                }
            
            `}
        </style>
    </>
  );
}
