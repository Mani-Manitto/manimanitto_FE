import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import htmlToImage, { toPng } from 'html-to-image';
import Lottie from 'react-lottie';
import * as animationData from '../../../public/image5.json';
import room from '../../../types/room';

interface roomProps {
    className: string;
    roomInfo: room;
}

const JoinComplete: NextPage<roomProps> = ( props ) => {
    const [name, setName] = useState<string>('')
    const ref = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const saveAsImage = useCallback(() => {
        if(ref.current === null){
            return;
        };

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'myManitto.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error(err);
            })
    }, [ref]);

    useEffect(() => {
        const query = router.query.name?.toString();

        const fetchData = async () => {
            try {
                console.log(query);
                const baseUrl = process.env.API_BASE_URL;
                const response = await axios.post(`${baseUrl}/${props.roomInfo.roomCode}`, {
                    name: query
                });
                console.log("마니또 조회 결과: ", response.data.manittoName);
                setName(response.data.manittoName);
            }catch(err){
                console.error("마니또 조회 에러: ", err);
            }
        };

        fetchData();
    },[router.query.name])

    return (
      <>
          <div className="container" ref={ref}>
              <div className="greeting">
                  <span>당신의 마니또는<br/><span className="userName">{name}</span>입니다!</span>
              </div>
              <div className="infoMessage">
                  <p>너만 알고 있어야해 멍!</p>
              </div>
              <div className="character-container">
                {/* <iframe src="https://lottie.host/embed/6f4ef4c3-5dec-4c7c-9e2b-603c42561666/MEKz0qliha.json"></iframe> */}
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
              <div className="btns">
                  <button className="button1" onClick={saveAsImage}>이미지 저장하기</button>
                  <button className="button2">처음으로</button>
              </div>
          </div>
          <style jsx>
              {`
                  .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding-top: 30px;
                  }
                  .greeting {
                      text-align: center;
                      margin-bottom: 50px;
                  }
                  
                  .greeting span{
                      font-size: 32px;
                      font-weight: bold;
                  }
  
                  .userName {
                      background-image: linear-gradient(to right, #00C5B3, #7F8CFF);
                      -webkit-background-clip: text; /* Safari 및 기타 브라우저 지원 */
                      background-clip: text;
                      color: transparent; /* 텍스트를 투명하게 만들어 배경 그라데이션이 표시되도록 합니다. */
                  }
  
                  .infoMessage {
                      position: relative;
                      width: 80%;
                      height: 85px;
                      padding: 10px;
                      background-color: #ffffff;
                      border-radius: 10px;
                      box-shadow: rgba(0, 197, 179, 0.25) 0px 13px 27px -5px, rgba(0, 197, 179, 0.3) 0px 8px 16px -8px;
  
                      display: flex;
                      align-items: center;
                      justify-content: center;
                  }
  
                  .infoMessage::before {
                      content: "";
                      position: absolute;
                      top: 100%; /* 말풍선 아래에 배치 */
                      left: 50%;
                      margin-left: -10px; /* 삼각형 가로 위치 조정 */
                      border-width: 20px;
                      border-style: solid;
                      border-color: #ffffff transparent transparent transparent; 
                  }
                  .infoMessage p {
                      font-size: 19px;
                      color: #7B7B7B;
                  }
  
                  .btns {
                      text-align: center;
                      margin-top: 30px;
                  }
                  .btns button {
                      display: inline-block;
                      margin: 10px;
                  }
  
                  .character-container {
                      position: relative;
                      width: 400px;
                      height: 400px;
                      overflow: hidden;
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
  
export default JoinComplete;

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const response = await axios.get(`${baseUrl}/roomCodes`);
        const roomCodes = response.data;
        console.log(response.data);

        const paths = roomCodes.map((room: {roomCode: string}) => ({
            params: {roomCode: room.roomCode}
        }));

        console.log(paths);

        return { paths, fallback: false};
    } catch(err){
        console.error("올바른 방을 찾지 못했습니다.", err)
        return {paths: [], fallback: false};
    }
    // const paths = [{ params: {roomCode: '76SuErRfy5'}}];    // 여기에 저장된 이름만 페이지가 만들어짐 >> 그러면 전체 목록을 가져오는 것도 필요한가

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const roomCode: string | string[] | undefined = params?.roomCode;

    const baseUrl = process.env.API_BASE_URL;
    const apiURL = `${baseUrl}`;

    const roomInfo: room = { 
        roomCode: roomCode, 
        roomName: '',
        names: [],
    }

    try {
        const response = await axios.get(`${apiURL}/${roomCode}`);
        console.log(response.data);
        roomInfo.roomName = response.data.roomName;
        roomInfo.names = response.data.names;
    } catch (error) {
        console.error(error);
    }
 
    return { props: { roomInfo } };
}